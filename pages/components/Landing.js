import React from "react"
import MapChart from './MapChart'
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from 'react'
import styles from '../../styles/map.module.css'

function Landing() {
    const [content, setContent] = useState("");
    const [isMounted, setIsMounted] = useState(false);  //Fixed some dangerouslySetInnerHTML issues on the browser console
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div className={styles.map}>
            <MapChart setTooltipContent={setContent} />
            {
                isMounted && <ReactTooltip>{content}</ReactTooltip>
            }
        </div>
    )
}

export default Landing
