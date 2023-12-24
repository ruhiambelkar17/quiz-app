import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import { useState } from "react";

function QuizLayout() {
    const [timerNewVal,setTimerNewVal]=useState(0);
    let [counter,setCounter]=useState(0);
    let [isNextBtn,setNextBtn]=useState(false);

    const queList=[
        {que:"What is the correct syntax of doctype in HTML5?",
    options:["</doctype html>","<doctype html>","<doctype html!>","<!doctype html>"]},
    {que:"Which of the following is used to read an HTML page and render it?",
    options:["Web server","Web network","Web browser","Web matrix"]},
    {que:"Which of the following tag is used for inserting the largest heading in HTML?",
    options:["<h1>","<head>","<h6>>","<heading>"]},
    {que:"n which part of the HTML metadata is contained?",
    options:["head tag","title tag","html tag","body tag"]}
    ];

    const ansList=[]


    function updateTimer(timerVal){
        setTimerNewVal(timerVal);
        //console.log("reset timer")
    }

    function goToNextQue(){
        
        

        if(counter<queList.length-1){
            setCounter(counter+1);
            setTimerNewVal(60);
            
        }
        else {
            counter=counter;
        }
        //setNextBtn(false);
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
                <Timer onUpdateTimer={updateTimer} nextPg={timerNewVal} />
              </div>
            </div>
            <p className="card-text">
              <div className="d-flex justify-content-between">
                <p>Q.{counter+1} {queList[counter].que}</p>
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
                {queList[counter].options[0]}
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
                {queList[counter].options[1]}
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
                {queList[counter].options[2]}
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
                {queList[counter].options[3]}
                </label>
              </div>
            </p>
            <div className="card-footer text-body-secondary d-flex justify-content-end">
              <button
                type="button"
                style={{ backgroundColor: "#056D61", border: "#056D61" }}
                className="btn btn-primary"
                onClick={goToNextQue}
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
