import geopandas as gpd

INPUT = "../data/boundaries/masp_cities.shp"

OUTPUT = "../frontend/public/masp_cities.geojson"

gdf = gpd.read_file(INPUT)

print(gdf.crs)

gdf = gdf.to_crs("EPSG:4326")

gdf.to_file(
    OUTPUT,
    driver="GeoJSON"
)

print("Saved:", OUTPUT)
