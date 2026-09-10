import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";
import CityDrawer from "./components/CityDrawer";
import WelcomeCard from "./components/WelcomeCard";
import MapLegend from "./components/MapLegend";
import OpacityControl from "./components/OpacityControl";
import LayerValueTooltip from "./components/LayerValueTooltip";
import ScienceInfoCard from "./components/ScienceInfoCard";




function App() {

  // ----------------------------------
  // Layer controls
  // ----------------------------------

  const [selectedLayer, setSelectedLayer] =
    useState("NEE");

  const [opacity, setOpacity] =
    useState(100);

  const [showMunicipalities, setShowMunicipalities] =
    useState(true);

  const [basemap, setBasemap] =
  useState("streets");

  // ----------------------------------
  // Hover information
  // ----------------------------------

  const [showLayerValues, setShowLayerValues] =
  useState(false);

  const [mousePosition, setMousePosition] =
    useState({
      lng: 0,
      lat: 0,
    });

  const [pixelValue, setPixelValue] =
    useState(null);

  // ----------------------------------
  // Map information
  // ----------------------------------

  const [zoom, setZoom] =
    useState(9);

  // ----------------------------------
  // City information
  // ----------------------------------

    const [cityInfo, setCityInfo] =
      useState(null);

    const [selectedCity, setSelectedCity] =
      useState(null);

    const [resetMapView, setResetMapView] =
      useState(false);

  // ----------------------------------
  // Layer metadata
  // ----------------------------------

  const [rasterMetadata, setRasterMetadata] =
    useState(null);

  // ----------------------------------
  // Welcome card
  // ----------------------------------

    const [showWelcome, setShowWelcome] =
      useState(true);

    const [advancedMode, setAdvancedMode] =
      useState(false);

    const [showScienceInfo, setShowScienceInfo] =
  useState(false);


  useEffect(() => {

    fetch(`${import.meta.env.BASE_URL}${selectedLayer}_metadata.json`)
      .then((response) => response.json())
      .then((data) => {
        setRasterMetadata(data);
      });

  }, [selectedLayer]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >

      {advancedMode && (
      <Sidebar
        opacity={opacity}
        setOpacity={setOpacity}

        selectedLayer={selectedLayer}
        setSelectedLayer={setSelectedLayer}

        showMunicipalities={showMunicipalities}
        setShowMunicipalities={
          setShowMunicipalities
        }

        mousePosition={mousePosition}
        zoom={zoom}
        pixelValue={pixelValue}
        cityInfo={cityInfo}
        setAdvancedMode={setAdvancedMode}
        showLayerValues={showLayerValues}
        setShowLayerValues={setShowLayerValues}
        setShowScienceInfo={setShowScienceInfo}
        basemap={basemap}
        setBasemap={setBasemap}
      />
          )}



      <MapView
        opacity={opacity}

        setMousePosition={
          setMousePosition
        }

        setZoom={setZoom}

        setPixelValue={
          setPixelValue
        }

        rasterMetadata={
          rasterMetadata
        }

        selectedLayer={
          selectedLayer
        }

        showMunicipalities={
          showMunicipalities
        }
        setCityInfo={setCityInfo}
        setSelectedCity={setSelectedCity}
        resetMapView={resetMapView}
        setResetMapView={setResetMapView}
        advancedMode={advancedMode}
        basemap={basemap}
      />

        {showWelcome && (
          <WelcomeCard
            onClose={() => {
              setShowWelcome(false);
            }}

            onDeepDive={() => {
              setShowWelcome(false);
              setAdvancedMode(true);
            }}
          />
        )}

      {!showWelcome && (
        <MapLegend
          drawerOpen={selectedCity !== null}
          advancedMode={advancedMode}
          selectedLayer={selectedLayer}
          onDeepDive={() =>
            setAdvancedMode(true)
          }
        />
      )}

      {!showWelcome && (
        <OpacityControl
          opacity={opacity}
          setOpacity={setOpacity}
          drawerOpen={selectedCity !== null}
        />
      )}

      {advancedMode && showLayerValues && (
        <LayerValueTooltip
          mousePosition={mousePosition}
          pixelValue={pixelValue}
          selectedLayer={selectedLayer}
        />
      )}

    {showScienceInfo && (
      <ScienceInfoCard
        onClose={() =>
          setShowScienceInfo(false)
        }
      />
    )}

      <CityDrawer
        city={selectedCity}
        setSelectedCity={setSelectedCity}
        setResetMapView={setResetMapView}
        setAdvancedMode={setAdvancedMode}
      />

    </div>
  );
}

export default App;