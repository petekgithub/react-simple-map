import React from "react";
import { Link } from "react-router-dom";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";

const MapChart = ({ setTooltipContent, covidData }) => {
  return (
    <div
      data-testid="map-chart"
      onClick={() => setTooltipContent("Hello, world")}
    >
      <ComposableMap projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}>
        <ZoomableGroup>
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />

          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Link to={`covid-data/${geo.id}`} key={geo.rsmKey}>
                    <Geography
                      geography={geo}
                      onMouseEnter={() =>
                        setTooltipContent(geo.properties.name)
                      }
                      onMouseLeave={() => setTooltipContent("")}
                      style={{
                        default: {
                          fill: "#888",
                        },
                        hover: {
                          fill: "#47edb6",
                        },
                      }}
                    />
                  </Link>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
