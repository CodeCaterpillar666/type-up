import React, {FC, useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

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

    return (
        <>
            <p>
                {`
                    Time: ${time} | 
                    Enter Letters: ${totalCnt} |
                    Correct Letters: ${totalCnt - wrongCnt} |
                    Correct Rate: ${correctPercentage}
                `}
            </p>
        </>
    );
}