import React, { useEffect, useState } from 'react'

export default function Timer({ setcounterValue, counterValue }) {

    const handleTimerBtn = () => {
        let timerID = setInterval(() => {
            setcounterValue((prevValue) => {
                if (prevValue === 60) {
                    clearInterval(timerID);
                    return 0;
                }
                return prevValue + 1;
            });
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    };

    useEffect(() => {
        const cleanUp = handleTimerBtn();
        return cleanUp;
    }, [])

    return (
        <div>
            <p style={{fontSize:'30px', margin: 'auto', display:'flex', justifyContent:'center', marginTop:'10%' }}>Timer: {counterValue}</p>
        </div>
    )
}
