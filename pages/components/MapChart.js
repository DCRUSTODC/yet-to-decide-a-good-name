import React, { memo } from "react"
React.useLayoutEffect = React.useEffect;
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import graph from '../../public/features.json'

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
                                        setTooltipContent(`${geo.properties.name}` + ` ${geo.properties.rate || ''}`);
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
                                            fill: "rgb(255, 42, 255)",
                                        },
                                        pressed: {
                                            fill: "#fff",
                                            outline: "#fff",
                                            outlineWidth: 1,
                                            outlineStyle: "dashed"
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