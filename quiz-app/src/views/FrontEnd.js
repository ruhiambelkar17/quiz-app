import React from "react";
import Navbar from "../components/Navbar";

function QuizInfoCard(props) {
  return (
    <div classNameName="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.language}</h5>
          <p className="card-text">
            <p>No. Questions: {props.questions}</p>
            <p>Time:{props.time}</p>
          </p>
          <a href="#link" className="btn btn-primary">
            Start
          </a>
        </div>
      </div>
    </div>
  );
}

function FrontEnd() {
  const quizInfo = [
    {
      language: "HTML",
      level: "Beginner",
      time: "30mins",
      cardImg: "",
      questions: "30",
    },
    {
      language: "HTML",
      level: "Intermediate",
      time: "30mins",
      cardImg: "",
      questions: "20",
    },
  ];
  return (
    <div style={{ backgroundColor: "#F4FFFE" }}>
      <Navbar />
      <div className="m-3">
        <div classNameName="row">
          <div classNameName="col-md-3">
            {quizInfo.map(QuizInfoCard)}
            {quizInfo.map(item=>{
            return <QuizInfoCard language={item.language} level={item.level} time={item.time} questions={item.questions} cardImg={item.cardImg} />
          })}
          </div>          
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
