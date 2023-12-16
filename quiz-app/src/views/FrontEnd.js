import React from "react";
import Navbar from "../components/Navbar";
import Clock1 from "../assets/images/clock1.jpg";
import { Link } from "react-router-dom";

function QuizInfoCard(props) {
  return (
    
     <div className="col-md-4">
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
          {/* <a href="#link" style={{backgroundColor:'#056D61',border:'#056D61'}} className="btn btn-primary">
            Start
          </a> */}
          <Link to={'/quiz'} style={{backgroundColor:'#056D61',border:'#056D61'}} className="btn btn-primary" >Start</Link>
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
    {
      language: "HTML",
      level: "Advanced",
      time: "30mins",
      cardImg: "",
      questions: "15",
    },
    {
      language: "CSS",
      level: "Beginner",
      time: "30mins",
      cardImg: "",
      questions: "30",
    },
    {
      language: "CSS",
      level: "Intermediate",
      time: "30mins",
      cardImg: "",
      questions: "20",
    },
    {
      language: "CSS",
      level: "Advanced",
      time: "30mins",
      cardImg: "",
      questions: "15",
    },
  ];
  return (
    <div style={{ backgroundColor: "#F4FFFE" }}>
      <Navbar />
      <div className="m-3">
        <div className="row">
          
            {quizInfo.map(QuizInfoCard)}
            {/* {quizInfo.map(item=>{
            return <QuizInfoCard language={item.language} level={item.level} time={item.time} questions={item.questions} cardImg={item.cardImg} />
          })} */}
                  
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
