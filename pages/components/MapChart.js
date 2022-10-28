import React, { memo } from "react"
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import graph from '../../data/features.json'

const MapChart = ({ setTooltipContent }) => {
    return (
        <div data-tip="">
            <ComposableMap>
                <ZoomableGroup>
                    <Geographies geography={graph}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setTooltipContent(`${geo.properties.name}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#1e001e", //purpleish color bb
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#972fff",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
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
};

export default memo(MapChart);