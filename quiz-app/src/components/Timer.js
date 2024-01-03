import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Timer(props){
    let[timerValue,setTimer]=useState(60); 
    let timerVal=useSelector((state)=> state);
    useEffect(() => {
        updateTimer();
      }, [timerValue]);


    function updateTimer(){
        //setTimer(timerVal);
       // timerValue=timerVal;
        //let a=props.nextPg ;
        console.log("hittteedddd")

       if (timerVal > 0)
       {
        props.onUpdateTimer(timerVal);
        timerVal > 0 && setTimeout(() => setTimer(timerVal - 1), 1000);
        console.log("hitttt next",timerVal);
       }
            
       else{
        props.onUpdateTimer(timerValue);
        timerValue > 0 && setTimeout(() => setTimer(timerValue - 1), 1000);
        console.log("before next",timerValue);
       }
        
        
    }

    return(
        <div>
            <span>{timerVal > 0 ? timerVal:timerValue} </span>
        </div>
    )
}

export default Timer;