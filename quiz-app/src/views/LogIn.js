import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";

export default function LogIn(){
    const [users,setUsers]=useState([]);
    const [inputs, setInputs] = useState([{ username: "",password:""}]);

    useEffect(() => {
        
        getUser();
      }, []);
    function getUser() {
        fetch("http://localhost:1337/api/user-accounts")
          .then((res) => res.json())
          .then((data) => {
            console.log("***get users",data.data);
            setUsers(data.data);
            console.log("***@@@@@users",users);
            //console.log("***@@@@@",queList.attributes.question );
            //setNewQueList(data.data[counter]);
          });
    
        
      }
      const handleChange = (event ) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        console.log(onChangeValue)
        onChangeValue[name] = value;
        setInputs(onChangeValue);
      };
      function onLogIn(){

      }
    return (
       <>
       <Navbar />
       
        <div className="row" >
            <div className="col-md-6 offset-3 border rounded my-5 shadow">
                <h2 className="text-center mt-3 pb-3">Log In</h2>
                
                <form>
                <div className="mb-3">
                    <label className="form-label" for="fullname" >User Name</label>
                    <input className="form-control" id="fullname" onChange={(event) => handleChange(event )} required />
                </div>               
                
                <div className="mb-3">
                    <label className="form-label" for="fullname" >Password</label>
                    <input className="form-control" id="fullname" onChange={(event) => handleChange(event )} required />
                </div>
                
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={onLogIn} style={{ backgroundColor: "#056D61", border: "#056D61" }} >Button</button>
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