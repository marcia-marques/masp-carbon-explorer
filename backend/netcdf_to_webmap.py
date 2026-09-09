import xarray as xr
import rioxarray
import numpy as np
import rasterio
import matplotlib.pyplot as plt

from matplotlib.colors import (
    TwoSlopeNorm,
    ListedColormap,
    BoundaryNorm
)

import json

# ==================================================
# USER SETTINGS
# ==================================================

NETCDF_FILE = "../data/netcdf/fluxes_2022_year.nc"

# VARIABLE = "NEE"
# VARIABLE = "GPP"
# VARIABLE = "Reco"
VARIABLE = "land_cover"

# ==================================================
# MAPBIOMAS CLASSES PRESENT IN MASP
# ==================================================

LAND_COVER_CLASSES = [
    2,    # EBF
    10,   # Grass
    11,   # Wetland
    12,   # Crops
    13,   # Urban
    17,  # Water
    99,   # Mosaic
]

LAND_COVER_COLORS = [
    "#1f8d49",  # EBF
    "#d6bc74",  # Grass
    "#519799",  # Wetland
    "#edde8e",  # Crops
    "#d4271e",  # Urban
    "#2532e4",   # Water
    "#ffefc3",  # Mosaic
]

LAND_COVER_LABELS = [
    "Forest",
    "Grass",
    "Wetland",
    "Crops",
    "Urban",
    "Water",
    "Mosaic",
]

# ==================================================
# CONFIGURATION
# ==================================================

CONFIG = {

    "NEE": {
        "type": "diverging",
        "cmap": "RdBu_r"
    },

    "GPP": {
        "type": "sequential",
        "cmap": "Greens"
    },

    "Reco": {
        "type": "sequential",
        "cmap": "YlOrRd"
    },

    "land_cover": {
        "type": "categorical",
        "categories": LAND_COVER_CLASSES,
        "colors": LAND_COVER_COLORS,
        "labels": LAND_COVER_LABELS
    }
}

# ==================================================
# OUTPUT FILES
# ==================================================

TIF_FILE = f"../data/geotiff/{VARIABLE}.tif"

PNG_FILE = f"../frontend/public/{VARIABLE}.png"

JSON_FILE = f"../frontend/public/{VARIABLE}_metadata.json"

# ==================================================
# READ NETCDF
# ==================================================

ds = xr.open_dataset(NETCDF_FILE)

da = ds[VARIABLE]

# Fix upside-down PNG issue
da = da.sortby("lat", ascending=False)

da = da.rio.set_spatial_dims(
    x_dim="lon",
    y_dim="lat"
)

da = da.rio.write_crs("EPSG:4326")

# ==================================================
# EXPORT GEOTIFF
# ==================================================

da.rio.to_raster(TIF_FILE)

print("Saved:", TIF_FILE)

# ==================================================
# EXPORT PNG
# ==================================================

data = da.values

valid = data[~np.isnan(data)]

config = CONFIG[VARIABLE]

plt.figure(figsize=(8, 5))

# --------------------------------------------------
# NEE
# --------------------------------------------------

if config["type"] == "diverging":

    norm = TwoSlopeNorm(
        vmin=np.nanmin(data),
        vcenter=0,
        vmax=np.nanmax(data)
    )

    plt.imshow(
        data,
        cmap=config["cmap"],
        norm=norm,
        interpolation="nearest"
    )

# --------------------------------------------------
# GPP / Reco
# --------------------------------------------------

elif config["type"] == "sequential":

    plt.imshow(
        data,
        cmap=config["cmap"],
        vmin=np.nanmin(valid),
        vmax=np.nanmax(valid),
        interpolation="nearest"
    )

# --------------------------------------------------
# LAND COVER
# --------------------------------------------------

elif config["type"] == "categorical":

    print("\nClasses present:")

    present_classes = np.sort(
        np.unique(valid)
    )

    print(present_classes)

    cmap = ListedColormap(
        config["colors"]
    )

    boundaries = (
        np.array(config["categories"])
        - 0.5
    )

    boundaries = np.append(
        boundaries,
        config["categories"][-1] + 0.5
    )

    norm = BoundaryNorm(
        boundaries,
        cmap.N
    )

    plt.imshow(
        data,
        cmap=cmap,
        norm=norm,
        interpolation="nearest"
    )

# --------------------------------------------------

plt.axis("off")

plt.savefig(
    PNG_FILE,
    bbox_inches="tight",
    pad_inches=0,
    transparent=True
)

plt.close()

print("Saved:", PNG_FILE)

# ==================================================
# EXPORT METADATA
# ==================================================

with rasterio.open(TIF_FILE) as src:

    metadata = {
        "variable": VARIABLE,
        "width": src.width,
        "height": src.height,
        "bounds": {
            "left": src.bounds.left,
            "right": src.bounds.right,
            "top": src.bounds.top,
            "bottom": src.bounds.bottom
        },
        "values": np.nan_to_num(
            src.read(1),
            nan=-9999
        ).tolist()
    }

    if VARIABLE == "land_cover":

        metadata["classes"] = {
            str(class_id): label
            for class_id, label in zip(
                LAND_COVER_CLASSES,
                LAND_COVER_LABELS
            )
        }

with open(JSON_FILE, "w") as f:

    json.dump(metadata, f)

print("Saved:", JSON_FILE)
