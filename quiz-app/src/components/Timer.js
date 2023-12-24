import { useState, useEffect } from "react";

function Timer(props){
    const[timerValue,setTimer]=useState(60); 

    useEffect(() => {
        updateTimer();
      }, [timerValue]);

    

    function updateTimer(){
        let a=props.nextPg ;
        if (a>0){
            a > 0 && setTimeout(() => setTimer(a - 1), 1000);
            props.onUpdateTimer(a);
            }
            
            else {
                timerValue > 0 && setTimeout(() => setTimer(timerValue - 1), 1000);
                props.onUpdateTimer(timerValue);
            }
            //props.onUpdateTimer(timerValue);
        //timerValue > 0 && setTimeout(() => setTimer(timerValue - 1), 1000);
        // if (props.nextPg){
        //     props.onUpdateTimer();   
        // }
        // else {
        //     props.onUpdateTimer(timerValue);   
        // }
        
    }

    // if (props.nextPg){
    //     console.log("prop next")
    //     updateTimer();
    // }

    return(
        <div>
            <span>{timerValue} or {props.nextPg}</span>
        </div>
    )
}

export default Timer;