import { Link } from "react-router-dom";
export default function LogIn(){
    return (
       <>
       <div className="m-5">
            <h3>Log In</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label" for="name" > User Name</label>
                    <input className="form-control" type="text" id="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="name" > Password</label>
                    <textarea className="form-control" type="text" id="name" />
                </div>
                <div>
                    <button className="btn btn-primary"> Submit</button>
                </div>
                <hr />
                <p>Do not have account? <a className="nav-link"  href="#link">
            <Link to={'/sign-in'}>
            Sign In</Link>
            </a></p>
            </form>
        </div>
       </>
    )
}