import rasterio
import matplotlib.pyplot as plt
import numpy as np

tif_path = "../data/geotiff/test.tif"

with rasterio.open(tif_path) as src:
    data = src.read(1)

print("Shape:", data.shape)
print("NaN count:", np.isnan(data).sum())

print("Valid pixels:", np.sum(~np.isnan(data)))

valid = data[~np.isnan(data)]

print("Min valid:", np.min(valid))
print("Max valid:", np.max(valid))
print("Mean valid:", np.mean(valid))

plt.imshow(data)
plt.colorbar()

plt.savefig("test_tif_preview.png", dpi=200)

print("Saved: test_tif_preview.png")
