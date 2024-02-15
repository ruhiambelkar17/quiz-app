import Navbar from "../components/Navbar";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="row ">
        <div className="col-md-6 offset-3 border rounded my-5 shadow">
          <h2 className="text-center mt-3 pb-3">Sign In</h2>
          <div className="mb-3">
            <label className="form-label" for="fullname">
              Full Name
            </label>
            <input className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <label className="form-label" for="fullname">
              User Name
            </label>
            <input className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <label className="form-label" for="fullname">
              E-Mail
            </label>
            <input className="form-control" id="fullname" />
          </div>

          <div className=" mb-3">
            <label className="form-label" for="fullname">
              Phone
            </label>
            <div className="input-group">
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle border "
                  style={{borderRadius:"5px 0 0 5px"}}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  +91
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      +47 Norway
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      +46 Sweden
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      +42
                    </button>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                className="form-control"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" for="fullname">
              Password
            </label>
            <input className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <label className="form-label" for="fullname">
              Repeat Password
            </label>
            <input className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#056D61", border: "#056D61" }}
              type="submit"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
