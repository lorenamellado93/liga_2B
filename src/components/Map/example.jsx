import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/spain/spain-comunidad-with-canary-islands.json";

const App = () => (
  <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap>
  </div>
);

return (
    <div style={wrapperStyles}>
      <ComposableMap
        projectionConfig={{
          scale: 205,
          rotation: [-11, 0, 0]
        }}
        width={980}
        height={551}
        style={{
          width: "100%",
          height: "auto"
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies
            geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
            disableOptimization
          >
            {(geographies, projection) =>
              geographies.map((geography, i) => (
                <Geography
                  key={i}
                  cacheId={geography.properties.ISO_A3 + i}
                  geography={geography}
                  projection={projection}
                  onMouseMove={this.handleMove}
                  onMouseLeave={this.handleLeave}
                  style={{
                    default: {
                      fill:
                        geography.properties.CONTINENT ===
                        this.state.highlighted
                          ? "#DD4132"
                          : "#F0EAD6",
                      stroke:
                        geography.properties.CONTINENT ===
                        this.state.highlighted
                          ? "#9E1030"
                          : "#B2A27D",
                      strokeWidth: 0.75,
                      outline: "none",
                      transition: "all 250ms"
                    },
                    hover: {
                      fill: "#FF6F61",
                      stroke: "#9E1030",
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
