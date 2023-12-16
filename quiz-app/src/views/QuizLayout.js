function QuizLayout(){
    return (
        <div style={{ backgroundColor: "#F4FFFE" }}>
             <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <h5 className="card-title"></h5>
          <p>Time:</p>
          </div>
          <p className="card-text">
            <div className="d-flex justify-content-between"> 
            <p>No. Questions: </p>
            
            </div>
            <p>Level:</p>
          </p>
          <a href="#link" style={{backgroundColor:'#056D61',border:'#056D61'}} className="btn btn-primary">
            Start
          </a>
        </div>
      </div>
        </div>
    )
}

export default QuizLayout;