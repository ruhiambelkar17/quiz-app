import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";

export default function SignIn() {
    const [inputs, setInputs] = useState([{ fullname: "", username: "",email:"",mobileno:"",password:"",repeatpassword:"" }]);

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        console.log(onChangeValue)
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
      };

      const addUser = () => {
        setInputs([...inputs, { fullname: "", username: "",email:"",mobileno:"",password:"",repeatpassword:"" }]);
        console.log("**users",inputs);
        if ([...inputs]){
            fetch("http://localhost:1337/api/user-accounts", {
                method: "POST",
                body: JSON.stringify({
                  data:{
                    fullName:inputs[0].fullname,
                    userName:inputs[0].username,
                    email:inputs[0].email,
                    mobileNumber:inputs[0].mobileno,
                    password:inputs[0].password,
                    repeatPassword:inputs[0].repeatpassword
                  }
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then(response => response.json()
                )
                .then(data => {
                  setInputs([...inputs, data])
                  
                  
                })
        }
       
      };

      useEffect(() => {
        // POST request using fetch inside useEffect React hook
       

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  return (
    <>
      <Navbar />
      <div className="row ">
        <div className="col-md-6 offset-3 border rounded my-5 shadow">
          <h2 className="text-center mt-3 pb-3">Sign In</h2>
         {inputs.map((item,index)=>(
            <form key={index}>
            <div className="mb-3">
               <label className="form-label" for="fullname">
                 Full Name
               </label>
               <input className="form-control" type="text" name="fullname"  value={item.fullname}
            onChange={(event) => handleChange(event, index)} required/>
             </div>
             <div className="mb-3">
               <label className="form-label" for="username" >
                 User Name
               </label>
               <input className="form-control" name="username" value={item.username}
            onChange={(event) => handleChange(event, index)} required/>
             </div>
             <div className="mb-3">
               <label className="form-label" for="email">
                 E-Mail
               </label>
               <input className="form-control" name="email" value={item.email}
            onChange={(event) => handleChange(event, index)} required/>
             </div>
   
             <div className=" mb-3">
               <label className="form-label" for="mobileno">
                 Mobile Number
               </label>
               <input className="form-control" name="mobileno" type="number" value={item.mobileno}
            onChange={(event) => handleChange(event, index)} required />
             
               {/* <div className="input-group">
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
               </div> */}
             </div>
             <div className="mb-3">
               <label className="form-label" for="password">
                 Password
               </label>
               <input className="form-control" name="password" type="password" value={item.password}
            onChange={(event) => handleChange(event, index)} required />
             </div>
             <div className="mb-3">
               <label className="form-label" for="repeatpassword">
                 Repeat Password
               </label>
               <input className="form-control" name="repeatpassword" type="password" value={item.repeatpassword}
            onChange={(event) => handleChange(event, index)} required />
             </div>
             <div className="mb-3">
               <button
                 className="btn btn-primary"
                 style={{ backgroundColor: "#056D61", border: "#056D61" }}
                 type="button"
                 onClick={addUser}
               >
                 Button
               </button>
             </div>
            </form>
            
         ))}
        </div>
        <div className="body"> {JSON.stringify(inputs)} </div>
      </div>
    </>
  );
}
