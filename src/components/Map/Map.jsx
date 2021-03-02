import React, { Component, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

import './Map.scss';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
};

const Map = () => {
  const [highlighted, sethighlighted] = useState("");
  const [hovered, sethovered] = useState(false);

  const MAP_URL =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/spain/spain-comunidad-with-canary-islands.json";

  const handleMove = (geo) => {
    if (hovered) return;
    sethovered(true) && sethighlighted(geo.properties.NAME);
    console.log(geo);
  };

  const handleLeave = () => {
    sethighlighted("") && sethovered(false);
  };

  console.log(highlighted);

  return (
    <div >
    <div style={wrapperStyles}>
      <ComposableMap
        projectionConfig={{
          scale: 800,

        }}
        width={980}
        height={551}
        style={{
          width: "200%",
          height: "auto",
        }}
      >
        <ZoomableGroup center={[0, 0]} disablePanning>
          <Geographies geography={MAP_URL}>
            {({ geographies, projection}) =>
              geographies.map((geo, i) => (
                <Geography 
                key={i}
                cacheId={geo.properties.ISO + i}
                geography={geo}
                projection={projection}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{
                    default: {
                      fill:
                      geo.properties.NAME ===
                        highlighted
                          ? "#DD4132"
                          : "#F0EAD6",
                      stroke:
                      geo.properties.NAME ===
                        highlighted
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
                  }}/>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
    </div>
  );
};

export default Map;
