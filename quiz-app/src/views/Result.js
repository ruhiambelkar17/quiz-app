import Navbar from "../components/Navbar";

function Result() {
  return (
    <div>
        <Navbar />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Thanks for taking an Assessment!!</h5>
          <p className="card-text">Your Score: 18/20</p>
          <p>You have passed the Assessment!!</p>
          <a
            href="#"
            className="btn btn-primary"
            style={{ backgroundColor: "#056D61", border: "#056D61" }}
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
