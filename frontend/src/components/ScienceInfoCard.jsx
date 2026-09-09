function ScienceInfoCard({ onClose }) {
  return (
      <div
          style={{
              position: "absolute",

              top: "50%",
              left: "50%",

              transform:
                  "translate(-50%, -50%)",

              width: "700px",

              backgroundColor: "white",

              padding: "30px",

              borderRadius: "16px",

              boxShadow:
                  "0 10px 40px rgba(0,0,0,0.25)",

              zIndex: 5000,
          }}
      >
          <h2>
              Understanding the Layers
          </h2>
          <p>
              These layers show different aspects of
              the exchange of carbon dioxide (CO₂)
              between the ecosystem and the atmosphere.

              The estimates were generated using the
              Urban Vegetation Photosynthesis and Respiration
              Model (UrbanVPRM)

              <a
                  href="https://doi.org/10.1016/j.scitotenv.2017.03.028"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                      textDecoration: "none",
                      marginLeft: "4px",
                  }}
              >
                  📖
              </a>

              , a model that uses satellite observations
              and meteorological data to estimate
              these exchanges.
          </p>
          <hr/>

          {/*<h3>*/}
          {/*    /!*🌍*!/*/}
          {/*    Net Carbon Exchange (NEE)*/}
          {/*</h3>*/}

          <p>
              <b>Net Carbon Exchange (NEE)</b>: Ecosystem CO₂ balance. Is the difference of Reco and GPP.
              Negative values indicate net uptake
              of CO₂ by vegetation, while positive
              values indicate net release.
          </p>

          {/*<h3>*/}
          {/*    /!*🌳*!/*/}
          {/*    Carbon Uptake (GPP)*/}
          {/*</h3>*/}

          <p>
              <b>Carbon Uptake (GPP)</b>: CO₂ absorbed by vegetation through
              photosynthesis.
          </p>

          {/*<h3>*/}
          {/*    /!*🍂 *!/*/}
          {/*    Carbon Release (Reco)*/}
          {/*</h3>*/}

          <p>
              <b>Carbon Release (Reco)</b>: CO₂ released by ecosystem respiration, both by plants and soils.
          </p>

          {/*<h3>*/}
          {/*    /!*🗺*!/*/}
          {/*    Land Cover*/}
          {/*</h3>*/}

          <p>
              <b>Land Cover</b>: Vegetation and land use types. For each type GPP and Reco are calculated with different
              formulations.
          </p>

          <hr/>

          <h3>
              Units
          </h3>

          <p>
              NEE, GPP and Reco are expressed in
              μmol CO₂ m⁻² s⁻¹, a measure of how much
              μmol CO₂ m⁻² s⁻¹, a measure of how much
              carbon dioxide is exchanged between the
              ecosystem and the atmosphere per unit
              area and time.
          </p>

          <button
              onClick={onClose}
              style={{
                  marginTop: "15px",

                  padding: "10px 14px",

                  border: "none",

                  borderRadius: "8px",

                  backgroundColor: "#1f8d49",

                  color: "white",

                  cursor: "pointer",
              }}
          >
              Close
          </button>
      </div>
  );
}

export default ScienceInfoCard;
``