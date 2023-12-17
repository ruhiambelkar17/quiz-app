import { useState, useEffect } from "react";

function Timer(){
    const[timerValue,setTimer]=useState(60); 

    useEffect(() => {
        timerValue > 0 && setTimeout(() => setTimer(timerValue - 1), 1000);
      }, [timerValue]);

    return(
        <div>
            <span>{timerValue}</span>
        </div>
    )
}

export default Timer;