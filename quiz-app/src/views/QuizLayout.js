import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function QuizLayout() {
  const [timerVal, setTimerVal] = useState(10);
  let [counter, setCounter] = useState(0);
  let [counter1, setCounter1] = useState([]);
  const navigate = useNavigate();
  const [ansList, setAnsList] = useState([]);
  let [finalResult, setFinalResult] = useState(0);
  const [queList,setQueList]=useState([]);
  const [newQueList,setNewQueList]=useState([]);
 

  let i = 0;
  useEffect(() => {
    console.log("*****",counter1) 
    if (i === 0) {
      i++;
      getQuestions();
      updateTimer();
      
    }
    
  }, [counter]);

  function selectAns(event) {
    let a = event.target.value;
    setAnsList([...ansList, a]);
    //setCounter1(counter1+1);
    
  }
  function getQuestions() { 
    fetch("http://localhost:1337/api/html-questions/")
    .then((res) => 
       res.json()
)
    .then((data) => {
        //console.log("***@@@@@",data.data);
         setQueList(data.data);
         //console.log("***@@@@@",queList.attributes.question );
         setNewQueList(data.data[counter]);
    });
    
    //console.log("***@@@@@",queList);
  }

  function goToNextQuestion() {
    resetAns();
    resetJSIntervals();
    setTimerVal((prevVal) => 10);
    updateTimer();

    

    console.log("Ans list", ansList);
    if (counter <queList.length - 1) {
      setCounter(counter + 1);
      setNewQueList(queList[counter]);
      
    } else if (counter === queList.length - 1) {
      
      for (let i in ansList) {
        console.log(queList[i].attributes.answer);
        if (queList[i].attributes.answer === ansList[i]) {
          
          setFinalResult(finalResult+=1);
        } else {
          setFinalResult(finalResult += 0);
        }
      }
      navigate("/result",{state:finalResult});
    }
    console.log("####result",finalResult);

    
  }



  function resetJSIntervals() {
    // todo-improve
    for (i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  }

  function resetAns() {
    const chks = document.querySelectorAll(".form-check input");
    for (let i = 0; i < chks.length; i++) {
      const chk = chks[i];
      chk.checked = false;
    }
  }

  function updateTimer() {
    if (timerVal >= 0 || !timerVal) {
      setInterval(() => {
        setTimerVal((prevVal) => {
          if (prevVal === 0) {
            resetJSIntervals();
          } else {
            return prevVal - 1;
          }
        });
      }, 1000);
    }
  }


 
   
  
  return (
    <div>
      <Navbar />
     
      <div
        style={{ backgroundColor: "#F4FFFE" }}
        className="d-flex justify-content-center "
      >
        <div className="card w-75 my-5">
          <div className="card-body">
          <div className="d-flex justify-content-between">
              <div className="d-inline-flex">
                <p>Time:{timerVal || 0}</p> 
               <p>ans: {ansList}</p> 
              {/* <Timer
                  onUpdateTimer={updateTimer}
                  onResetTimer={resetTimer}
                />  
                */}
                {/* {JSON.stringify(newQueList)} */}
              </div>
            </div> 
          
             <p className="card-text">
              <div className="d-flex justify-content-between">
                 
                </div>
                  {newQueList && Object.keys(newQueList).map((que,i)=> ( 
                    
                  <div >
              
                  <p> Q.{counter + 1} {newQueList[que].question}</p>
                  <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={newQueList[que].options?.a}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {newQueList[que].options?.a}
                </label>
              </div> 
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value={newQueList[que].options?.b}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  {newQueList[que].options?.b}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value={newQueList[que].options?.c}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  {newQueList[que].options?.c}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  value={newQueList[que].options?.d}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  {newQueList[que].options?.d}
                </label>
              </div> 
                  </div>
                ))}   
                </p> 
              
                  </div>
              </div>
              </div>

              
            
            <div className="card-footer text-body-secondary d-flex justify-content-end">
              <button
                type="button"
                style={{ backgroundColor: "#056D61", border: "#056D61" }}
                className="btn btn-primary"
                onClick={goToNextQuestion}
              >
                Next
              </button>
            </div>
          </div>
       
   
   
  );
}

export default QuizLayout;
