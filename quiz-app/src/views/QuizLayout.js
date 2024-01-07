import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizLayout() {
  const [timerVal, setTimerVal] = useState(5);
  let [counter, setCounter] = useState(0);
  let [counter1, setCounter1] = useState([]);
  const navigate = useNavigate();
  const [ansList, setAnsList] = useState([]);
  let [finalResult, setFinalResult] = useState(0);
  const queList = [
    {
      que: "What is the correct syntax of doctype in HTML5?",
      options: [
        "</doctype html>",
        "<doctype html>",
        "<doctype html!>",
        "<!doctype html>",
      ],
      answer: "<!doctype html>",
    },
    {
      que: "Which of the following is used to read an HTML page and render it?",
      options: ["Web server", "Web network", "Web browser", "Web matrix"],
      answer: "Web browser",
    },
    {
      que: "Which of the following tag is used for inserting the largest heading in HTML?",
      options: ["<h1>", "<head>", "<h6>>", "<heading>"],
      answer: "<h1>",
    },
    {
      que: "In which part of the HTML metadata is contained?",
      options: ["head tag", "title tag", "html tag", "body tag"],
      answer: "head tag",
    },
  ];

  let i = 0;
  useEffect(() => {
    console.log("*****",counter1)
    if (i === 0) {
      i++;
      updateTimer();
      
    }
  }, []);

  function selectAns(event) {
    let a = event.target.value;
    setAnsList([...ansList, a]);
    //setCounter1(counter1+1);
    
  }

  function goToNextQuestion() {
    resetAns();
    resetJSIntervals();
    setTimerVal((prevVal) => 5);
    updateTimer();

    

    console.log("Ans list", ansList);
    if (counter < queList.length - 1) {
      setCounter(counter + 1);
      
      
    } else if (counter === queList.length - 1) {
      
      for (let i in ansList) {
        if (queList[i].answer === ansList[i]) {
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
                />  */}
              </div>
            </div>

            <p className="card-text">
              <div className="d-flex justify-content-between">
                <p>
                  Q.{counter + 1} {queList[counter].que}
                </p>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={queList[counter].options[0]}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {queList[counter].options[0]}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value={queList[counter].options[1]}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  {queList[counter].options[1]}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value={queList[counter].options[2]}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  {queList[counter].options[2]}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  value={queList[counter].options[3]}
                  onChange={selectAns}
                  disabled={timerVal === 0 || !timerVal ? true : false}
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  {queList[counter].options[3]}
                </label>
              </div>
            </p>
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
        </div>
      </div>
    </div>
  );
}

export default QuizLayout;
