import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

function QuizLayout() {
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
              <h5 className="card-title"></h5>
              <div className="d-inline-flex"><p>Time:</p><Timer /></div> 
            </div>
            <p className="card-text">
              <div className="d-flex justify-content-between">
                <p>Q.1 What does the abbreviation HTML stand for?</p>
              </div>
              <ul className="lh-5">
                <li className="mb-2">HyperText Markup Language</li>
                <li className="mb-2">HightText Markup Language</li>
                <li className="mb-2">HightText Markdown Language</li>
                <li className="mb-2">None of the above</li>
              </ul>
            </p>
            <div className="card-footer text-body-secondary d-flex justify-content-end">
              <a
                href="#link"
                style={{ backgroundColor: "#056D61", border: "#056D61" }}
                className="btn btn-primary"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizLayout;
