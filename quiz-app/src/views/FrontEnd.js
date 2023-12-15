import React from "react";
import Navbar from "../components/Navbar";
import Clock1 from "../assets/images/clock1.jpg"

function QuizInfoCard(props) {
  return (
    
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.language}</h5>
          <p>Time:{props.time}</p>
          </div>
          <p className="card-text">
            <div className="d-flex justify-content-between"> 
            <p>No. Questions: {props.questions}</p>
            <img width={50} height={50} src={Clock1} />
            </div>
            <p>Level:{props.level}</p>
          </p>
          <a href="#link" style={{backgroundColor:'#056D61',border:'#056D61'}} className="btn btn-primary">
            Start
          </a>
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
        <div className="row">
          <div className="col-md-3">
            {quizInfo.map(QuizInfoCard)}
            {/* {quizInfo.map(item=>{
            return <QuizInfoCard language={item.language} level={item.level} time={item.time} questions={item.questions} cardImg={item.cardImg} />
          })} */}
          </div>          
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
