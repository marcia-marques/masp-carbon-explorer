function CityDrawer({
  city,
  setSelectedCity,
  setResetMapView,
  setAdvancedMode,
}) {


  if (!city) return null;

  const bioNEE = Number(city.bio_nee_total);

  const anthropogenic =
  Number(city.anthropogenic_emissions);

const offsetPercent =
  Math.abs(bioNEE) /
  anthropogenic * 100;

const insightText =
  bioNEE < 0
    ? `Vegetation offsets ${offsetPercent.toFixed(0)}% of local CO₂ emissions.`
    : `Vegetation contributes ${offsetPercent.toFixed(0)}% to local CO₂ emissions.`;

const insightIcon =
  bioNEE < 0
    ? "⭐"
    : "⚠️";

    const vegetationLabel =
      bioNEE < 0
        ? "Vegetation removes"
        : "Vegetation releases";

    const vegetationIcon =
      bioNEE < 0
        ? "🌳"
        : "🍂";

    const netEmissions = Number(city.net_emissions);

    const netLabel =
      netEmissions > 0
        ? "Net carbon source"
        : "Net carbon sink";

    const netIcon =
      netEmissions > 0
        ? "🟥"
        : "🟦";

  return (
      <div
          style={{
              width: "350px",
              backgroundColor: "white",
              borderLeft: "1px solid #ddd",
              padding: "20px",
              overflowY: "auto",
          }}
      >

          {/* ------------------------------ */}
          {/* Header */}
          {/* ------------------------------ */}

          <div
              style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
              }}
          >

              <h2
                  style={{
                      margin: 0,
                  }}
              >
                  {city.city}
              </h2>


          </div>

          {/* ------------------------------ */}
          {/* Carbon Fluxes */}
          {/* ------------------------------ */}

          <h3>Carbon Balance</h3>

          <div
              style={{
                  backgroundColor: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "10px",
              }}
          >
              <strong>{vegetationIcon} {vegetationLabel}</strong>

              <div>
                  {(
                      Math.abs(
                          Number(city.bio_nee_total)
                      ) / 1000
                  ).toFixed(1)}
                  {" "}kt CO₂
              </div>
          </div>

          <div
              style={{
                  backgroundColor: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "10px",
              }}
          >
              <strong>🏭 Human activities emit</strong>

              <div>
                  {(
                      Number(
                          city.anthropogenic_emissions
                      ) / 1000
                  ).toFixed(1)}
                  {" "}kt CO₂
              </div>
          </div>

          <div
              style={{
                  backgroundColor: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "20px",
              }}
          >
              <strong>
                  {netIcon} {netLabel}
              </strong>

              <div>
                  {(
                      Math.abs(
                          Number(city.net_emissions)
                      ) / 1000
                  ).toFixed(1)}
                  {" "}kt CO₂
              </div>
          </div>

          {/* ------------------------------ */}
          {/* Area */}
          {/* ------------------------------ */}

          <h3>Area</h3>

          <div
              style={{
                  backgroundColor: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "10px",
              }}
          >
              <strong>Total Area</strong>

              <div>
                  {Number(
                      city.total_area_km2
                  ).toFixed(1)}
                  {" "}km²
              </div>
          </div>

          <div
              style={{
                  backgroundColor: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
              }}
          >
              <strong>Urban Area</strong>

              <div>
                  {Number(
                      city.urban_area_km2
                  ).toFixed(1)}
                  {" "}km²
              </div>
          </div>

          <div
              style={{
                  marginTop: "24px",
              }}
          />


          {/*<hr*/}
          {/*    style={{*/}
          {/*        margin: "24px 0",*/}
          {/*    }}*/}
          {/*/>*/}

          {/*<h3>Key Insight</h3>*/}

          <div
              style={{
                  backgroundColor:
                      bioNEE < 0
                          ? "#eef6ee"
                          : "#fff3e0",

                  borderLeft:
                      bioNEE < 0
                          ? "4px solid #1f8d49"
                          : "4px solid #f57c00",

                  padding: "14px",
                  borderRadius: "8px",
                  marginBottom: "20px",
              }}
          >
              <div
                  style={{
                      fontWeight: "600",
                      marginBottom: "6px",
                  }}
              >
                  {insightIcon} Key Insight
              </div>

              <div>
                  {insightText}
              </div>
          </div>

          <p
              style={{
                  color: "#666",
                  lineHeight: 1.5,
              }}
          >
              Curious about how vegetation helps remove CO₂ from the atmosphere?
          </p>

          <button
              onClick={() => {
                  setSelectedCity(null);
                  setAdvancedMode(true);
                  setResetMapView(true);

              }}
              style={{
                  backgroundColor: "transparent",
                  border: "none",

                  color: "#1f8d49",

                  fontSize: "0.95rem",
                  fontWeight: "600",

                  cursor: "pointer",

                  padding: 0,
              }}
          >
              Explore the Science →
          </button>


      </div>
  );
}

export default CityDrawer;