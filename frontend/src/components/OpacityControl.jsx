function OpacityControl({
  opacity,
  setOpacity,
  drawerOpen,
}) {
  return (
    <div
      style={{
        position: "absolute",

        bottom: "145px",

        right: drawerOpen
          ? "370px"
          : "20px",

        backgroundColor:
          "rgba(255,255,255,0.95)",

        padding: "10px 12px",

        borderRadius: "10px",

        boxShadow:
          "0 4px 15px rgba(0,0,0,0.15)",

        zIndex: 900,

        width: "160px",

        transition:
          "right 0.3s ease-in-out",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          marginBottom: "6px",
        }}
      >
        <span
                style={{
                    fontWeight: "600",
                    marginBottom: "1px",
                    minHeight: "20px",
                    fontSize: "0.9rem",
                }}
        >
          Opacity
        </span>

        <span
          style={{
            fontSize: "0.85rem",
            color: "#666",
          }}
        >
          {opacity}%
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={opacity}
        onChange={(e) =>
          setOpacity(
            Number(e.target.value)
          )
        }
        style={{
          width: "100%",
          margin: 0,
        }}
      />

    </div>
  );
}

export default OpacityControl;