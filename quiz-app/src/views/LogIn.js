import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function LogIn(){
    return (
       <>
       <Navbar />
       
        <div className="row " >
            <div className="col-md-6 offset-3 border rounded my-5 shadow">
                <h2 className="text-center mt-3 pb-3">Log In</h2>
                
                <form>
                <div className="mb-3">
                    <label className="form-label" for="fullname" >User Name</label>
                    <input className="form-control" id="fullname" required />
                </div>               
                
                <div className="mb-3">
                    <label className="form-label" for="fullname" >Password</label>
                    <input className="form-control" id="fullname" required />
                </div>
                
                <div className="mb-3">
                    <button className="btn btn-primary" style={{ backgroundColor: "#056D61", border: "#056D61" }} >Button</button>
                </div>
                
                </form>
                <hr />
                    <p className="text-center">Do not have account? <a className="nav-link"  href="#link">
                <Link to={'/sign-in'}>
                Sign In</Link>
                </a></p>
            </div>
        </div>
       </>
    )
}