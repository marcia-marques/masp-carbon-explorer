function WelcomeCard({
  onClose,
  onDeepDive,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        width: "550px",
        backgroundColor: "rgba(255,255,255,0.96)",
        padding: "36px",
        borderRadius: "18px",

        boxShadow:
          "0 12px 40px rgba(0,0,0,0.18)",

        backdropFilter: "blur(10px)",

        zIndex: 1000,
      }}
    >
      <h1
        style={{
          marginTop: 0,
          marginBottom: "12px",
          fontSize: "2.2rem",
          lineHeight: 1.2,
          color: "#222",
        }}
      >
        Can vegetation help offset
        CO₂ emissions?
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "#555",
          marginBottom: "24px",
        }}
      >
        Explore the Metropolitan Area of São Paulo,
        the largest megacity in South America.
      </p>

      <div
        style={{
          backgroundColor: "#f7f9f8",
          borderLeft: "4px solid #1f8d49",
          padding: "12px 16px",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#444",
          }}
        >
          Blue municipalities act as net carbon sinks,
          while red municipalities act as net carbon sources.
        </p>
      </div>

      <p
        style={{
          color: "#444",
          lineHeight: 1.6,
          marginBottom: "18px",
        }}
      >
        Start by selecting a municipality on the map to discover
        how vegetation and human activities shape its carbon balance.
      </p>

      <button
        onClick={onClose}
        style={{
          backgroundColor: "#1f8d49",
          color: "white",
          border: "none",
          borderRadius: "10px",

          padding: "14px 22px",

          fontSize: "1rem",
          fontWeight: "600",

          cursor: "pointer",

          width: "100%",
          marginBottom: "24px",
        }}
      >
        Select a Municipality
      </button>

      <p
        style={{
          color: "#666",
          lineHeight: 1.6,
          marginBottom: "12px",
        }}
      >
        Curious about how vegetation helps remove CO₂ from the atmosphere?
        Explore detailed maps showing where ecosystems absorb
        and release CO₂ across the Metropolitan Area of São Paulo.
      </p>

      <button
        onClick={onDeepDive}
        style={{
          backgroundColor: "transparent",
          color: "#1f8d49",

          border: "none",

          fontSize: "1rem",
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

export default WelcomeCard;