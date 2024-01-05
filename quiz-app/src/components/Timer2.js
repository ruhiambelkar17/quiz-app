// import { useState, useEffect } from "react";

// function Timer2(props) {
//   const [timerValue, setTimerValue] = useState(props.val > 0 ? props.val : 60);
//   const [childKey, setChildKey] = useState(1);

//   useEffect(() => {
//     updateTimer();
//     console.log('aa', props.val);
//     setTimerValue(prev => prev++);
//   }, [timerValue]);

//   function resetTimer() {
//     setTimerValue(60);
//   }

//   function updateTimer() {
//     timerValue > 0 && setTimeout(() => setTimerValue(timerValue - 1), 1000);
//   }

//   return (
//     <div>
//       <span>{timerValue} </span>
//     </div>
//   );
// }

// export default Timer2;
