import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";


export default function LogIn(){
    const [users,setUsers]=useState([]);
    const [inputs, setInputs] = useState([{ username: "",password:""}]);
    const navigate = useNavigate();

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
      const handleChange = (event, index) => {
        console.log("@@event",event.target)
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        console.log(onChangeValue)
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
      }
      function onLogIn(){
        console.log("users@@@@",users[0].attributes.password);
        console.log("imputs@@@@",inputs)
       for(let i=0;i<users.length;i++){
        if(inputs[0].username === users[i].attributes.userName  ){
            navigate("/");  
        }
       }
      }
    return (
       <>
       <Navbar />
       
        <div className="row" >
            <div className="col-md-6 offset-3 border rounded my-5 shadow">
                <h2 className="text-center mt-3 pb-3">Log In</h2>
                {inputs.map((item,index)=>(
                    <form key={index}>
                   
                 <div className="mb-3">
                   <label className="form-label" for="username" >
                     User Name
                   </label>
                   <input className="form-control" name="username" value={item.username}
                onChange={(event) => handleChange(event, index)} required/>
                 </div>
                 <div className="mb-3">
                   <label className="form-label" for="password">
                     Password
                   </label>
                   <input className="form-control" type="text" name="password"  value={item.password}
                onChange={(event) => handleChange(event, index)} required/>
                 </div>
                    
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={onLogIn} style={{ backgroundColor: "#056D61", border: "#056D61" }} >Button</button>
                    </div>
                    
                    </form>
                ))}

                
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