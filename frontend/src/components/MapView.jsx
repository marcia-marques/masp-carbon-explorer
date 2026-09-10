import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import bbox from "@turf/bbox";

const LAYER_FILES = {
  NEE: {
    image: `${import.meta.env.BASE_URL}NEE.png`,
    metadata: `${import.meta.env.BASE_URL}NEE_metadata.json`,
  },

  GPP: {
    image: `${import.meta.env.BASE_URL}GPP.png`,
    metadata: `${import.meta.env.BASE_URL}GPP_metadata.json`,
  },

  Reco: {
    image: `${import.meta.env.BASE_URL}Reco.png`,
    metadata: `${import.meta.env.BASE_URL}Reco_metadata.json`,
  },

  land_cover: {
    image: `${import.meta.env.BASE_URL}land_cover.png`,
    metadata: `${import.meta.env.BASE_URL}land_cover_metadata.json`,
  },
};

const RASTER_BOUNDS = [
  [-47.208333, -23.183333],
  [-45.695833, -23.183333],
  [-45.695833, -24.062500],
  [-47.208333, -24.062500],
];

function MapView({
  opacity,
  setMousePosition,
  setZoom,
  setPixelValue,
  rasterMetadata,
  selectedLayer,
  showMunicipalities,
  setCityInfo,
  setSelectedCity,
  resetMapView,
  setResetMapView,
  advancedMode,
  basemap,
}) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const rasterMetadataRef = useRef(null);

  useEffect(() => {
    rasterMetadataRef.current = rasterMetadata;
  }, [rasterMetadata]);

    // ==================================================
    // STORY MODE / SCIENCE MODE
    // ==================================================

    useEffect(() => {

      const map = mapRef.current;

      if (!map) return;

      try {

        map.setLayoutProperty(
          "masp-cities-fill",
          "visibility",
          advancedMode
            ? "none"
            : "visible"
        );

      } catch {

        // layer not loaded yet

      }

    }, [advancedMode]);

  // ==================================================
  // CREATE MAP
  // ==================================================

  useEffect(() => {

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [-46.4543, -23.6505],
      zoom: 8.75,
    });

    map.addControl(
      new maplibregl.NavigationControl(),
      "top-right"
    );

    map.addControl(
      new maplibregl.ScaleControl(),
      "bottom-left"
    );

    // ------------------------------------------
    // Hover values
    // ------------------------------------------

    map.on("mousemove", (e) => {

      const lon = e.lngLat.lng;
      const lat = e.lngLat.lat;

      setMousePosition({
        lng: lon,
        lat: lat,

        x: e.point.x,
        y: e.point.y,
      });

      const metadata = rasterMetadataRef.current;

      if (!metadata) return;

      const {
        bounds,
        width,
        height,
        values,
      } = metadata;

      const col = Math.floor(
        ((lon - bounds.left) /
          (bounds.right - bounds.left)) *
          width
      );

      const row = Math.floor(
        ((bounds.top - lat) /
          (bounds.top - bounds.bottom)) *
          height
      );

      if (
        row < 0 ||
        row >= height ||
        col < 0 ||
        col >= width
      ) {
        return;
      }

      const value = values[row][col];

      if (value === -9999) {
        setPixelValue(null);
        return;
      }

      if (
        metadata.variable === "land_cover" &&
        metadata.classes
      ) {

        const label =
          metadata.classes[
            String(Math.round(value))
          ];

        setPixelValue(
          label || `Class ${value}`
        );

      } else {

        setPixelValue(value);

      }

    });

    // ------------------------------------------
    // Zoom
    // ------------------------------------------

    map.on("zoom", () => {
      setZoom(map.getZoom());
    });

    // ------------------------------------------
    // Layers
    // ------------------------------------------

    map.on("load", () => {

      // Raster source

      map.addSource("raster-source", {
        type: "image",
        url: LAYER_FILES[selectedLayer].image,
        coordinates: RASTER_BOUNDS,
      });

      // Raster layer

    map.addLayer({
      id: "raster-layer",
      type: "raster",
      source: "raster-source",

      layout: {
        visibility:
          advancedMode
            ? "visible"
            : "none",
      },

      paint: {
          "raster-opacity": opacity / 100,
          "raster-resampling": "nearest",
        },
      });

      // Municipality boundaries

      map.addSource("masp-cities", {
        type: "geojson",
        // data: "/masp_cities.geojson",
        data: `${import.meta.env.BASE_URL}masp_city_indicators.geojson`,
      });

              map.addLayer({
          id: "masp-cities-fill",
          type: "fill",
          source: "masp-cities",

          layout: {
            visibility:
              advancedMode
                ? "none"
                : "visible",
          },

          paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "net_emissions"],

            -1300000, "#08306b",  // strong sink
            -500000,  "#4292c6",
            -100000,  "#c6dbef",

             0,       "#ffffff",

             100000,  "#fdd0c9",
             500000,  "#fb6a4a",
             1500000, "#cb181d"   // strong source
          ],

          "fill-opacity": 1
        }

        });

      map.addLayer({
        id: "masp-cities-line",
        type: "line",
        source: "masp-cities",

        paint: {
          "line-color": "#666666",
          "line-width": 0.6,
        },

        layout: {
          visibility:
            showMunicipalities
              ? "visible"
              : "none",
        },
      });



      map.on(
      "click",
      "masp-cities-fill",
      (e) => {

        const feature = e.features?.[0];

        if (!feature) return;

        setSelectedCity(
          feature.properties
        );

        const cityBounds = bbox(feature);

        map.fitBounds(
          [
            [cityBounds[0], cityBounds[1]],
            [cityBounds[2], cityBounds[3]]
          ],
          {
            padding: 200,
            duration: 1000
          }
        );

      }
    );

      map.on(
    "mouseleave",
    "masp-cities-fill",
    () => {
      setCityInfo(null);
    }
  );

    });



    mapRef.current = map;

    return () => {
      map.remove();
    };

  }, []);

  // ==================================================
  // OPACITY
  // ==================================================

    useEffect(() => {

      const map = mapRef.current;

      if (!map) return;

      try {

        if (map.getLayer("raster-layer")) {

          map.setPaintProperty(
            "raster-layer",
            "raster-opacity",
            opacity / 100
          );

        }

        if (map.getLayer("masp-cities-fill")) {

          map.setPaintProperty(
            "masp-cities-fill",
            "fill-opacity",
            opacity / 100
          );

        }

      } catch {

        // layer not ready yet

      }

    }, [opacity]);

  // ==================================================
  // MUNICIPALITIES VISIBILITY
  // ==================================================

  useEffect(() => {

    const map = mapRef.current;

    if (!map) return;

    if (
      map.getLayer("masp-cities-line")
    ) {

      map.setLayoutProperty(
        "masp-cities-line",
        "visibility",
        showMunicipalities
          ? "visible"
          : "none"
      );

    }

  }, [showMunicipalities]);

  // =============================
  // ==================================================
// STORY MODE / SCIENCE MODE
// ==================================================

    useEffect(() => {

      const map = mapRef.current;

      if (!map) return;

      try {

        map.setLayoutProperty(
          "masp-cities-fill",
          "visibility",
          advancedMode
            ? "none"
            : "visible"
        );

        map.setLayoutProperty(
          "raster-layer",
          "visibility",
          advancedMode
            ? "visible"
            : "none"
        );

      } catch {

        // layers not ready yet

      }

    }, [advancedMode]);

  // ==================================================
  // CLOSE RIGHT SIDE
  // ==================================================

  useEffect(() => {

      if (!resetMapView) return;

      const map = mapRef.current;

      if (!map) return;

      map.flyTo({
        center: [-46.4543, -23.6505],
        zoom: 8.75,
        duration: 1000,
      });
      // map.fitBounds(
      //   [
      //     [-47.208333, -24.062500],
      //     [-45.695833, -23.183333]
      //   ],
      //   {
      //     padding: 40,
      //     duration: 1000
      //   }
      // );

      setResetMapView(false);

    }, [resetMapView]);

  // ==================================================
  // SWITCH RASTER
  // ==================================================

  useEffect(() => {

    const map = mapRef.current;

    if (!map) return;

    const source =
      map.getSource("raster-source");

    if (!source) return;

    source.updateImage({
      url:
        LAYER_FILES[selectedLayer].image,
      coordinates: RASTER_BOUNDS,
    });

  }, [selectedLayer]);

  return (
    <div
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default MapView;