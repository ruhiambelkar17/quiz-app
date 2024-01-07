import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom"

function Result() {
  const { state } = useLocation();
  console.log("*****result****",state);
  const totalQue=4;
  const [percentage,setPercentage]=useState(0);
  const [result,setResult]=useState("");

  useEffect(()=>{
    calculateFinalResult();
  },[]);

  function calculateFinalResult(){
    setPercentage((state/totalQue)*100);
    if (percentage >= 65){
      setResult("passed");
    }
    else
    {
      setResult("failed");
    }
  }

  return (
    <div>
        <Navbar />
      <div className="row mt-5 text-center ">
        <div className="col-md-6 offset-md-3">
        <div className="card shadow">
        <div className="card-body" style={{color:"#056D61"}}>
          <h5 className="card-title" >Thanks for taking an Assessment!!</h5>
          <p className="card-text">Your Score: {state}/4</p>
          <p>Level:Beginer-{percentage}</p>
          <p >You have {result} the Assessment!!</p>
          <Link
            to={'/'}
            className="btn btn-primary"
            style={{ backgroundColor: "#056D61", border: "#056D61" }}
          >
            Home
          </Link>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
