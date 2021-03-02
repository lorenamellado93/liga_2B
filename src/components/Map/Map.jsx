import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

const wrapperStyles = {
  width: "100%",
  maxWidth: 2000,
  margin: "0 auto"
};

class WorldMap extends Component {
  state = {
    highlighted: "",
    hovered: false
  };
  handleMove = (geo) => {
    if (this.state.hovered) return;
    this.setState({
      hovered: true,
      highlighted: geo.properties.GROUP
    });
    console.log(geo.properties.GROUP);
  };
  handleLeave = () => {
    this.setState({
      highlighted: "",
      hovered: false
    });
  };
  render() {
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
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[5, 35]} disablePanning>
            <Geographies
              geography="https://raw.githubusercontent.com/lorenamellado93/group-spain-map/main/group-map.json"
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
                          geography.properties.GROUP === this.state.highlighted
                            ? "#F50025"
                            : "#EDEDED",
                        stroke:
                          geography.properties.GROUP === this.state.highlighted
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
}

export default WorldMap;
