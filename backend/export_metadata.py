import rasterio
import numpy as np
import json

INPUT_TIF = "../data/geotiff/test.tif"
OUTPUT_JSON = "../frontend/public/test_metadata.json"

with rasterio.open(INPUT_TIF) as src:

    data = src.read(1)

    metadata = {
        "width": src.width,
        "height": src.height,
        "bounds": {
            "left": src.bounds.left,
            "right": src.bounds.right,
            "top": src.bounds.top,
            "bottom": src.bounds.bottom,
        },
        "values": np.nan_to_num(
            data,
            nan=-9999
        ).tolist()
    }

with open(
    OUTPUT_JSON,
    "w"
) as f:

    json.dump(
        metadata,
        f
    )

print(
    "Saved:",
    OUTPUT_JSON
)
