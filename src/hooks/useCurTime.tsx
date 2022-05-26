import React, { useEffect, useState } from "react";

const useCurTime = () => {
    const locale = "en";
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setNow(new Date());
        }, 100);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    // monday-sunday
    const day = now.toLocaleDateString(locale, { weekday: 'long' });
    // 1-31
    const date = `${day}, ${now.getDate()} ${now.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    // 0-23
    const hour = now.getHours();
    // 
    const time = now.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return {
      date,
      time,
    };
}