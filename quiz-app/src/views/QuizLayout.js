import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Result from "./Result";
import { useState } from "react";

function QuizLayout() {
    const [timerNewVal,setTimerNewVal]=useState("");
    //const [isTimerStopped,setTimerFlag]=useState(false);

    function updateTimer(timerVal){
        setTimerNewVal(timerVal);
        
    }

    function goToNextQue(){

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
                <p>Time:</p>
                <Timer onUpdateTimer={updateTimer} />
              </div>
            </div>
            <p className="card-text">
              <div className="d-flex justify-content-between">
                <p>Q.1 What does the abbreviation HTML stand for?</p>
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
                  disabled={timerNewVal === 0 ? true: false}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                HyperText Markup Language
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  disabled={timerNewVal === 0 ? true: false}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                HightText Markup Language
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  disabled={timerNewVal === 0 ? true: false}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                HightText Markdown Language
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  disabled={timerNewVal === 0 ? true: false}
                />
                <label class="form-check-label" for="flexRadioDefault4">
                None of the above
                </label>
              </div>
            </p>
            <div className="card-footer text-body-secondary d-flex justify-content-end">
              <a
                href="#link"
                style={{ backgroundColor: "#056D61", border: "#056D61" }}
                className="btn btn-primary"
                onClick={goToNextQue}
              >
                Next
              </a>
            </div>
          </div>
        </div>
        <Result />
      </div>
    </div>
  );
}

export default QuizLayout;
