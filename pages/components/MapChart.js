import React, { memo } from "react"
React.useLayoutEffect = React.useEffect;
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import graph from '../../public/features.json'
import styles from '../../styles/home.module.css'

const MapChart = ({ setTooltipContent }) => {
    return (
        <div data-tip="">
            <div className={styles.centered}>
                <h3>
                    Population growth rates across the world
                </h3>
            </div>
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