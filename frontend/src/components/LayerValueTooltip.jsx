function LayerValueTooltip({
  mousePosition,
  pixelValue,
  selectedLayer,
}) {

    if (
        pixelValue === null ||
        mousePosition?.x === undefined
    ) {
        return null;
    }

    return (
        <div
            style={{
                position: "fixed",

                // left: mousePosition.x + 2,
                // top: mousePosition.y - 2,
                left:
                  mousePosition.x +
                  300 +   // sidebar width
                  8,

                top:
                  mousePosition.y + 8,



                backgroundColor: "rgba(255,255,255,0.95)",

                padding: "8px 10px",

                borderRadius: "8px",

                boxShadow:
                    "0 4px 12px rgba(0,0,0,0.15)",

                pointerEvents: "none",

                zIndex: 1000,

                fontSize: "0.85rem",
            }}
        >
            {/*<strong>*/}
            {/*    {selectedLayer === "land_cover"*/}
            {/*        ? "Land Cover"*/}
            {/*        : selectedLayer}*/}
            {/*</strong>*/}


            <div>
                {
                    typeof pixelValue === "number"
                        ? pixelValue.toFixed(2)
                        : pixelValue
                }
            </div>
        </div>
    );
}

export default LayerValueTooltip;