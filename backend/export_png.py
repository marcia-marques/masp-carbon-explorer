import rasterio
import numpy as np
import matplotlib.pyplot as plt

INPUT_TIF = "../data/geotiff/test.tif"

OUTPUT_PNG = "../frontend/public/real_overlay.png"

with rasterio.open(INPUT_TIF) as src:

    data = src.read(1)

    bounds = src.bounds

valid = data[~np.isnan(data)]

# vmin = np.percentile(valid, 2)
# vmax = np.percentile(valid, 98)
# vmin = np.min(valid)
# vmax = np.max(valid)
vmin = -4
vmax = 4

plt.figure(figsize=(8, 5))

plt.imshow(
    data,
    cmap="RdBu_r",
    vmin=vmin,
    vmax=vmax,
)

plt.axis("off")

plt.savefig(
    OUTPUT_PNG,
    bbox_inches="tight",
    pad_inches=0,
    transparent=True
)

print("Saved:", OUTPUT_PNG)

print("\nBounds:")
print(bounds)
