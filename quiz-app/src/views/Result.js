import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div>
        <Navbar />
      <div className="row mt-5 text-center ">
        <div className="col-md-6 offset-md-3">
        <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Thanks for taking an Assessment!!</h5>
          <p className="card-text">Your Score: 18/20</p>
          <p >You have passed the Assessment!!</p>
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
