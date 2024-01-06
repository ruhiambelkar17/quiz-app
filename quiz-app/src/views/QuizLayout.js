import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function QuizLayout() {
  const [timerVal, setTimerVal] = useState(5);
  const [timerAction, setTimerAction] = useState("start");
  let [counter, setCounter] = useState(0);
  //let [isNextBtn,setNextBtn]=useState(false);

  const queList = [
    {
      que: "What is the correct syntax of doctype in HTML5?",
      options: [
        "</doctype html>",
        "<doctype html>",
        "<doctype html!>",
        "<!doctype html>",
      ],
    },
    {
      que: "Which of the following is used to read an HTML page and render it?",
      options: ["Web server", "Web network", "Web browser", "Web matrix"],
    },
    {
      que: "Which of the following tag is used for inserting the largest heading in HTML?",
      options: ["<h1>", "<head>", "<h6>>", "<heading>"],
    },
    {
      que: "n which part of the HTML metadata is contained?",
      options: ["head tag", "title tag", "html tag", "body tag"],
    },
  ];

  let i = 0;
  useEffect(() => {
    if (i == 0) {
      i++;
      updateTimer();
    }
  }, []);

  function goToNextQuestion() {
    resetJSIntervals();
    setTimerVal((prevVal) => 5);
    updateTimer();

    if (counter < queList.length - 1) {
      setCounter(counter + 1);
    }
  }

  function resetJSIntervals() {
    // todo-improve
    for (i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  }

  function updateTimer() {
    if (timerVal >= 0 || !timerVal) {
      const timer = setInterval(() => {
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
                {/* <Timer
                  onUpdateTimer={updateTimer}
                  onResetTimer={resetTimer}
                />  */}
              </div>
            </div>
            {/* <QuestionCard ques={queList[counter]} counter timerVal /> */}
            {timerVal}
            <p className="card-text">
              <div className="d-flex justify-content-between">
                <p>
                  Q.{counter + 1} {queList[counter].que}
                </p>
              </div>
              {/* <ul className="lh-5">
                <li className="mb-2">HyperText Markup Language</li>
                <li className="mb-2">HightText Markup Language</li>
                <li className="mb-2">HightText Markdown Language</li>
                <li className="mb-2">None of the above</li>
              </ul> */}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
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
