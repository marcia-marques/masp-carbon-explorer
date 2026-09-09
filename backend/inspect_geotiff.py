import rasterio
import numpy as np

tif_path = "../data/geotiff/test.tif"

with rasterio.open(tif_path) as src:
    data = src.read(1)

valid = data[~np.isnan(data)]

print("Shape:", data.shape)
print("Total values:", data.size)
print("NaN count:", np.isnan(data).sum())
print("Valid pixels:", valid.size)

print("\nStatistics of valid pixels")
print("Min:", np.min(valid))
print("Max:", np.max(valid))
print("Mean:", np.mean(valid))
print("Std:", np.std(valid))

unique_count = len(np.unique(valid))

print("Unique values:", unique_count)

diffs = np.diff(valid)

print("Smallest difference:", diffs.min())
print("Median difference:", np.median(diffs))
print("Largest difference:", diffs.max())
