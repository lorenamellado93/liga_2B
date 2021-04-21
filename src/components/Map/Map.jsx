import React, { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

const wrapperStyles = {
  width: "100%",
  maxWidth: "50%",
  margin: "0 auto"
};


const WorldMap = () => {
  
    const [highlighted, setHighlighted] = useState("")
    const [hovered, setHovered] = useState(false)
    const map = "https://raw.githubusercontent.com/lorenamellado93/group-spain-map/main/group-map.json";

  const handleMove = (map) => {
    if (hovered) return;
    setHovered(true)
    setHighlighted(map.properties.GROUP)
    };

  const handleLeave = () => {
    setHighlighted("")
    setHovered(false)
    };

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 1500,
            rotation: [0, 0, 0]
          }}
          width={960}
          height={551}
          style={{
            width: "200%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[5, 35]} disablePanning>
            <Geographies
              geography={map}
              disableOptimization
            >
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    cacheId={geography.properties.ISO_A3 + i}
                    geography={geography}
                    projection={projection}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    style={{
                      default: {
                        fill:
                          geography.properties.GROUP === highlighted
                            ? "#F50025"
                            : "#EDEDED",
                        stroke:
                          geography.properties.GROUP === highlighted
                            ? "#F50025"
                            : "#CCCCCC",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 250ms"
                      },
                      hover: {
                        fill: "#F50025",
                        stroke: "#F50025",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 250ms"
                      },
                      pressed: {
                        fill: "#DD4132",
                        stroke: "#9E1030",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 250ms"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
}

export default WorldMap;
