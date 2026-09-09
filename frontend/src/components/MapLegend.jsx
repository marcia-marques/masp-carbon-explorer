function MapLegend({
  drawerOpen,
  advancedMode,
  selectedLayer,
  onDeepDive,
}) {

const containerStyle = {
  position: "absolute",

  bottom: "50px",

  right: drawerOpen
    ? "370px"
    : "20px",

  backgroundColor:
    "rgba(255,255,255,0.95)",

  padding: "10px",

  borderRadius: "10px",

  boxShadow:
    "0 4px 15px rgba(0,0,0,0.15)",

  zIndex: 900,

  width: "220px",

  transition:
    "right 0.3s ease-in-out",
};

  // ==========================================
  // STORY MODE
  // ==========================================

  if (!advancedMode) {

    return (
        <div style={containerStyle}>

            <div
                style={{
                    fontWeight: "600",
                    marginBottom: "8px",
                    minHeight: "20px",
                    fontSize: "0.9rem",
                }}
            >
                Net Carbon
            </div>

            <div
                style={{
                    height: "10px",
                    borderRadius: "6px",

                    background:
                        "linear-gradient(to right, #08306b, #ffffff, #cb181d)",

                    marginBottom: "8px",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",

                    fontSize: "0.85rem",

                    color: "#555",
                }}
            >
                <span>Net Sink</span>
                <span>Net Source</span>
            </div>

        </div>
    );
  }

    // ==========================================
    // LAND COVER LEGEND
    // ==========================================

        if (selectedLayer === "land_cover") {

          return (
            <div style={containerStyle}>

              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "8px",
                  minHeight: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Land Cover
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  gap: "4px 12px",
                  fontSize: "0.75rem",
                  color: "#555",
                }}
              >
                <div>
                  <span style={{ color: "#1f8d49" }}>■</span> Forest
                </div>

                <div>
                  <span style={{ color: "#d6bc74" }}>■</span> Grass
                </div>

                <div>
                  <span style={{ color: "#519799" }}>■</span> Wetland
                </div>

                <div>
                  <span style={{ color: "#edde8e" }}>■</span> Crops
                </div>

                <div>
                  <span style={{ color: "#d4271e" }}>■</span> Urban
                </div>

                <div>
                  <span style={{ color: "#ffefc3" }}>■</span> Mosaic
                </div>

              </div>

            </div>
          );
        }

  // ==========================================
  // NEE
  // ==========================================

  if (selectedLayer === "NEE") {

    return (
        <div style={containerStyle}>

            <div
                style={{
                    fontWeight: "600",
                    marginBottom: "8px",
                    minHeight: "20px",
                    fontSize: "0.9rem",
                }}
            >
                Net Carbon Exchange
            </div>

      <div
          style={{
              height: "10px",
              borderRadius: "6px",

              background:
                  "linear-gradient(to right, #08306b, #ffffff, #cb181d)",

            marginBottom: "8px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            fontSize: "0.85rem",

            color: "#555",
          }}
        >
          <span>CO₂ Uptake</span>
          <span>CO₂ Release</span>
        </div>

      </div>
    );
  }

  // ==========================================
  // GPP
  // ==========================================

  if (selectedLayer === "GPP") {

    return (
        <div style={containerStyle}>

            <div
                style={{
                    fontWeight: "600",
                    marginBottom: "8px",
                    minHeight: "20px",
                    fontSize: "0.9rem",
                }}
            >
                Carbon uptake
            </div>

            <div
                style={{
                    height: "10px",
                    borderRadius: "6px",

                    background:
                        "linear-gradient(to right, #e5f5e0, #238b45)",

                    marginBottom: "8px",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",

                    fontSize: "0.85rem",

                    color: "#555",
                }}
            >
                <span>Low</span>
                <span>High</span>
            </div>

        </div>
    );
  }

    // ==========================================
    // RECO
    // ==========================================

    return (
        <div style={containerStyle}>

            <div
                style={{
                    fontWeight: "600",
                    marginBottom: "8px",
                    minHeight: "20px",
                    fontSize: "0.9rem",
                }}
            >
                Carbon release
            </div>

            <div
                style={{
                    height: "10px",
                    borderRadius: "6px",

                    background:
                        "linear-gradient(to right, #fdd0a2, #b30000)",

                    marginBottom: "8px",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",

                    fontSize: "0.85rem",

                    color: "#555",
                }}
            >
                <span>Low</span>
                <span>High</span>
            </div>

        </div>
    );
}

export default MapLegend;