import Link from 'next/link'
import MapChart from './MapChart'
import ReactTooltip from "react-tooltip";
import { useState } from 'react'
import styles from '../../styles/map.module.css'

function Landing() {
    const [content, setContent] = useState("");

    return (
        <div className={styles.map}>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    )
}

export default Landing