import style from "./index.module.css";
import React, {FC, useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { ArrayView } from '../ArrayView';

interface StatisticsProps {
    hasStart: boolean,
    wrongCnt: number,
    totalCnt: number,
}

interface StatisticItem {
    key: String;
    value: String;
}

export const Statistics: FC<StatisticsProps> = ({ hasStart, wrongCnt, totalCnt }) => {

    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 60 * 60;
    const SECONDS_IN_DAY = 24 * 60 * 60;
    const { seconds, minutes, hours, days, start, pause } = useStopwatch({ autoStart: hasStart })
    const time = seconds + minutes * SECONDS_IN_MINUTE + hours * SECONDS_IN_HOUR + days * SECONDS_IN_DAY;
    const WordsPerMinute = (totalCnt / time * SECONDS_IN_MINUTE).toFixed(1);

    const correctPercentage = totalCnt === 0 ? 1 : (totalCnt - wrongCnt) / totalCnt;

    let statistics = new Array();
    statistics.push({"key": "Time", "value": `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`});
    statistics.push({"key": "Enter Letters", "value": totalCnt.toString()});
    statistics.push({"key": "Correct Letters", "value": (totalCnt - wrongCnt).toString()});
    statistics.push({"key": "Correct Rate", "value": (correctPercentage * 100).toFixed(2).concat("%")});
    statistics.push({"key": "Words/min", "value": WordsPerMinute.toString()});

    return (
        <>
            <ArrayView array={statistics}/>
        </>
    );
}