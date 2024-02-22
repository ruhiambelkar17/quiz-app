import Navbar from "../components/Navbar";
import Img1 from "../assets/images/study.png";
import { Link } from "react-router-dom";
//import FrontEnd from "./FrontEnd";
import "./Styles/Home.css";


function Home() {
//   const cardStyle = {
//     width: "289.444px",
//     height: "256.432px",
//     flexShrink: "0",
//     fill: "#B5FDF6",
//     filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25))",
//   };

  const quizDomains = [
    {
      name: "Front End Development",
      pathName: "/front-end-development",
    },
    {
        name: "Back End Development",
        pathName: "/front-end-development",
      },
      {
        name: "Full Stack Development",
        pathName: "/front-end-development",
      },
  ];

  const count=1;
  return (
    <div style={{  height: "918px" }}>
      <Navbar />
     
      <div className="d-flex justify-content-center mt-3 mb-3">
        <img src={Img1} width="300" height="350" alt="img" className="" />
      </div>
      <h3 className="text-center">
        Practice,understand and improve your knoweldge with QuizVerse!!
      </h3>
      <div className="row d-flex justify-content-center mt-5 mx-1">
        {quizDomains.map((item,index)=>(
          <div className="col-md-3 rounded me-5 d-flex justify-content-center align-items-center shadow" style={{backgroundColor:"#056D61", height:"20vh"}}>
          <a href="#" > <Link className="link" to={item.pathName}>
                {item.name}</Link>
                </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
