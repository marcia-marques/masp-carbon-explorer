function Sidebar({
  opacity,
  setOpacity,

  selectedLayer,
  setSelectedLayer,

  showMunicipalities,
  setShowMunicipalities,

  mousePosition,
  zoom,
  pixelValue,

  cityInfo,
  setAdvancedMode,
  showLayerValues,
  setShowLayerValues,
  setShowScienceInfo,
  basemap,
  setBasemap,
}) {
  return (
      <div
          style={{
              width: "300px",
              backgroundColor: "#f5f5f5",
              padding: "20px",
              overflowY: "auto",
              borderRight: "1px solid #ddd",
          }}
      >
          <button
              onClick={() => setAdvancedMode(false)}
              style={{
                  width: "100%",
                  marginBottom: "20px",
                  padding: "10px",

                  backgroundColor: "#1f8d49",
                  color: "white",

                  border: "none",
                  borderRadius: "8px",

                  cursor: "pointer",
                  fontWeight: "600",
              }}
          >
              ← Back to Municipality Explorer
          </button>

          <h2>Explore the Science</h2>

          <p>
              These layers show the biogenic CO₂ fluxes
              used to estimate vegetation carbon uptake
              across the Metropolitan Area of São Paulo.
          </p>

          {/* ---------------------------------- */}
          {/* Layer Selection */}
          {/* ---------------------------------- */}

          <hr/>

          <div
              style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
              }}
          >
              <h2 style={{margin: 0}}>
                  Layers
              </h2>

              <button
                  onClick={() =>
                      setShowScienceInfo(true)
                  }
                  style={{
                      width: "22px",
                      height: "22px",

                      borderRadius: "50%",

                      border: "1px solid #ccc",

                      backgroundColor: "white",

                      color: "#666",

                      fontSize: "0.8rem",
                      fontWeight: "600",

                      cursor: "pointer",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      padding: 0,
                  }}
              >
                  i
              </button>
          </div>

          <div style={{marginBottom: "12px"}}>
              <label>
                  <input
                      type="radio"
                      checked={selectedLayer === "NEE"}
                      onChange={() =>
                          setSelectedLayer("NEE")
                      }
                  />
                  {" "}
                  <strong>Net Carbon Exchange</strong>
              </label>

              <div
                  style={{
                      fontSize: "0.85rem",
                      color: "#666",
                      marginLeft: "24px",
                      marginTop: "2px",
                  }}
              >
                  Ecosystem CO₂ balance
              </div>
          </div>

          <div style={{marginBottom: "12px"}}>
              <label>
                  <input
                      type="radio"
                      checked={selectedLayer === "GPP"}
                      onChange={() =>
                          setSelectedLayer("GPP")
                      }
                  />
                  {" "}
                  <strong>Carbon Uptake</strong>
              </label>

              <div
                  style={{
                      fontSize: "0.85rem",
                      color: "#666",
                      marginLeft: "24px",
                      marginTop: "2px",
                  }}
              >
                  CO₂ absorbed by vegetation
              </div>
          </div>

          <div style={{marginBottom: "12px"}}>
              <label>
                  <input
                      type="radio"
                      checked={selectedLayer === "Reco"}
                      onChange={() =>
                          setSelectedLayer("Reco")
                      }
                  />
                  {" "}
                  <strong>Carbon Release</strong>
              </label>

              <div
                  style={{
                      fontSize: "0.85rem",
                      color: "#666",
                      marginLeft: "24px",
                      marginTop: "2px",
                  }}
              >
                  CO₂ released by ecosystem
              </div>
          </div>

          <div style={{marginBottom: "12px"}}>
              <label>
                  <input
                      type="radio"
                      checked={selectedLayer === "land_cover"}
                      onChange={() =>
                          setSelectedLayer("land_cover")
                      }
                  />
                  {" "}
                  <strong>Land Cover</strong>
              </label>

              <div
                  style={{
                      fontSize: "0.85rem",
                      color: "#666",
                      marginLeft: "24px",
                      marginTop: "2px",
                  }}
              >
                  Vegetation and land use types
              </div>
          </div>


          <hr/>

          {/* ---------------------------------- */}
          {/* Boundaries */}
          {/* ---------------------------------- */}

          <h2>Display</h2>

          <div style={{marginBottom: "10px"}}>
              <label>
                  <input
                      type="checkbox"
                      checked={showMunicipalities}
                      onChange={() =>
                          setShowMunicipalities(
                              !showMunicipalities
                          )
                      }
                  />
                  {" "}Municipality Boundaries
              </label>
          </div>

          <div>
              <label>
                  <input
                      type="checkbox"
                      checked={showLayerValues}
                      onChange={() =>
                          setShowLayerValues(
                              !showLayerValues
                          )
                      }
                  />
                  {" "}Show Layer Values
              </label>
          </div>

          {/*<hr/>*/}

          {/*<h2>Basemap</h2>*/}

          {/*<div>*/}
          {/*    <label>*/}
          {/*        <input*/}
          {/*            type="radio"*/}
          {/*            checked={basemap === "streets"}*/}
          {/*            onChange={() =>*/}
          {/*                setBasemap("streets")*/}
          {/*            }*/}
          {/*        />*/}
          {/*        {" "}Streets*/}
          {/*    </label>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*    <label>*/}
          {/*        <input*/}
          {/*            type="radio"*/}
          {/*            checked={basemap === "satellite"}*/}
          {/*            onChange={() =>*/}
          {/*                setBasemap("satellite")*/}
          {/*            }*/}
          {/*        />*/}
          {/*        {" "}Satellite*/}
          {/*    </label>*/}
          {/*</div>*/}

          {/*<h2>Boundaries</h2>*/}

          {/*<label>*/}
          {/*    <input*/}
          {/*        type="checkbox"*/}
          {/*        checked={showMunicipalities}*/}
          {/*        onChange={() =>*/}
          {/*            setShowMunicipalities(*/}
          {/*                !showMunicipalities*/}
          {/*            )*/}
          {/*        }*/}
          {/*    />*/}
          {/*    {" "}Municipalities*/}
          {/*</label>*/}

          {/*<hr/>*/}

          {/* ---------------------------------- */}
          {/* Opacity */}
          {/* ---------------------------------- */}

          {/*<h2>Opacity</h2>*/}

          {/*<p>{opacity}%</p>*/}

          {/*<input*/}
          {/*    type="range"*/}
          {/*    min="0"*/}
          {/*    max="100"*/}
          {/*    value={opacity}*/}
          {/*    onChange={(e) =>*/}
          {/*        setOpacity(*/}
          {/*            Number(e.target.value)*/}
          {/*        )*/}
          {/*    }*/}
          {/*    style={{*/}
          {/*      width: "100%",*/}
          {/*    }}*/}
          {/*/>*/}

          {/*<hr/>*/}

          {/* ---------------------------------- */}
          {/* Cursor */}
          {/* ---------------------------------- */}

          {/*<h2>Cursor</h2>*/}

          {/*<p>*/}
          {/*  Lon: {mousePosition.lng.toFixed(4)}*/}
          {/*</p>*/}

          {/*<p>*/}
          {/*  Lat: {mousePosition.lat.toFixed(4)}*/}
          {/*</p>*/}

          {/*<hr/>*/}

          {/* ---------------------------------- */}
          {/* Map Info */}
          {/* ---------------------------------- */}

          {/*<h2>Map</h2>*/}

          {/*<p>*/}
          {/*  Zoom: {zoom.toFixed(2)}*/}
          {/*</p>*/}

          {/*<hr/>*/}

          {/* ---------------------------------- */}
          {/* Layer Value */}
          {/* ---------------------------------- */}

          {/*<h2>Layer Value</h2>*/}

          {/*<p>*/}
          {/*    {pixelValue === null*/}
          {/*        ? "No Data"*/}
          {/*        : typeof pixelValue === "number"*/}
          {/*            ? `Value: ${pixelValue.toFixed(2)}`*/}
          {/*            : `Class: ${pixelValue}`}*/}
          {/*</p>*/}

          {/*<hr/>*/}

          {/* ---------------------------------- */}
          {/* Municipality */}
          {/* ---------------------------------- */}

          {/*<h2>Municipality</h2>*/}

          {/*{cityInfo ? (*/}
          {/*    <>*/}
          {/*      <p>*/}
          {/*        <strong>{cityInfo.city}</strong>*/}
          {/*      </p>*/}

          {/*      <p>*/}
          {/*        Bio NEE:*/}
          {/*        {" "}*/}
          {/*        {Number(*/}
          {/*            cityInfo.bio_nee_total*/}
          {/*        ).toLocaleString()}*/}
          {/*      </p>*/}

          {/*      <p>*/}
          {/*        Anthropogenic:*/}
          {/*        {" "}*/}
          {/*        {Number(*/}
          {/*            cityInfo.anthropogenic_emissions*/}
          {/*        ).toLocaleString()}*/}
          {/*      </p>*/}

          {/*      <p>*/}
          {/*        Net:*/}
          {/*        {" "}*/}
          {/*        {Number(*/}
          {/*            cityInfo.net_emissions*/}
          {/*        ).toLocaleString()}*/}
          {/*      </p>*/}

          {/*      <p>*/}
          {/*        Total Area:*/}
          {/*        {" "}*/}
          {/*        {Number(*/}
          {/*            cityInfo.total_area_km2*/}
          {/*        ).toFixed(1)}*/}
          {/*        {" "}km²*/}
          {/*      </p>*/}

          {/*      <p>*/}
          {/*        Urban Area:*/}
          {/*        {" "}*/}
          {/*        {Number(*/}
          {/*            cityInfo.urban_area_km2*/}
          {/*        ).toFixed(1)}*/}
          {/*        {" "}km²*/}
          {/*      </p>*/}
          {/*    </>*/}
          {/*) : (*/}
          {/*    <p>Hover a municipality</p>*/}
          {/*)}*/}

      </div>
  );
}

export default Sidebar;
