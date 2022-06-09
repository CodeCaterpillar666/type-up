import style from "./index.module.css";
import React, {FC, useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { MapView } from '../MapView';

interface StatisticsProps {
    hasStart: boolean,
    wrongCnt: number,
    totalCnt: number,
}

export const Statistics: FC<StatisticsProps> = ({ hasStart, wrongCnt, totalCnt }) => {

    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 60 * 60;
    const SECONDS_IN_DAY = 24 * 60 * 60;
    const { seconds, minutes, hours, days, start, pause } = useStopwatch({ autoStart: hasStart })
    const time = seconds + minutes * SECONDS_IN_MINUTE + hours * SECONDS_IN_HOUR + days * SECONDS_IN_DAY;

    const correctPercentage = (totalCnt === 0 ? 1 : (totalCnt - wrongCnt) / totalCnt).toFixed(3);

    let map = new Map<String, String>([]);
    map.set("Time", `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
    map.set("Enter Letters", totalCnt.toString());
    map.set("Correct Letters", (totalCnt - wrongCnt).toString());
    map.set("Correct Rate", correctPercentage.toString());

    return (
        <>
            <MapView map={map}/>
        </>
    );
}