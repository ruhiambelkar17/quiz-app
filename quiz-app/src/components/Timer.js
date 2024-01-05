import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Timer(props) {
  let [timerValue, setTimerValue] = useState(60);
  let [newTimerValue, setNewTimerValue] = useState(60);
  useEffect(() => {
    updateTimer();
  }, [timerValue]);

//   function resetTimer() {
//     setTimerValue(60);
//     updateTimer();
//   }

  function updateTimer() {
    //setTimer(timerVal);
    // timerValue=timerVal;
    //let a=props.nextPg ;
    //console.log("hittteedddd", timerValue);

    // if (timerVal.timer > 0) {
    //   props.onUpdateTimer(timerVal.timer);
    //   timerVal.timer > 0 &&
    //     setTimeout(() => setTimerValue(timerVal.timer - 1), 1000);
    //   console.log("hitttt next", timerVal.timer);
    // } else {
    //   props.onUpdateTimer(timerValue);
    //   timerValue > 0 && setTimeout(() => setTimerValue(timerValue - 1), 1000);
    //   console.log("before next", timerValue);
    // }
    props.onUpdateTimer(timerValue);
    timerValue > 0 && setTimeout(() => setTimerValue(timerValue - 1), 1000);

    props.onResetTimer(newTimerValue);
    console.log("next")
    newTimerValue > 0 && setTimeout(() => setNewTimerValue(newTimerValue - 1), 1000);
  }

  return (
    <div>
      <span>{setNewTimerValue > 0 ? setNewTimerValue : timerValue} </span>
    </div>
  );
}

export default Timer;
