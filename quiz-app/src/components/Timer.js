import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Timer(props) {
  let [timerValue, setTimerValue] = useState(60);
  //let [newTimerValue, setNewTimerValue] = useState(60);
  useEffect(() => {
    updateTimer();
  }, []);

//   function resetTimer() {
//     setTimerValue(60);
//     updateTimer();
//   }

  function updateTimer() {
   
    props.onUpdateTimer(timerValue);
    if (timerValue >= 0 || !timerValue) {
        const timer = setInterval(() => {
          setTimerValue((prevVal) => {
            if (prevVal === 0) {
                resetTimer();
            } else {
              return prevVal - 1;
            }
          });
        }, 1000);
      }
    //props.onResetTimer(newTimerValue);
    //newTimerValue > 0 && setTimeout(() => setNewTimerValue(newTimerValue - 1), 1000);
  }


  function resetTimer(){
    props.onResetTimer();
    for (let i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
  }

  return (
    <div>
      <span>{timerValue} </span>
    </div>
  );
}

export default Timer;
