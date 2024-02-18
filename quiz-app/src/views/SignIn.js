import Navbar from "../components/Navbar";
import { useState } from "react";

export default function SignIn() {
    const [inputs, setInputs] = useState([{ fullName: "", username: "",email:"",mobileno:"",password:"",repeatpassword:"" }]);

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
      };

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
               <input className="form-control" id="fullname" value={item.fullName}
            onChange={(event) => handleChange(event, index)} required/>
             </div>
             <div className="mb-3">
               <label className="form-label" for="username" >
                 User Name
               </label>
               <input className="form-control" id="username" value={item.username}
            onChange={(event) => handleChange(event, index)} required/>
             </div>
             <div className="mb-3">
               <label className="form-label" for="email">
                 E-Mail
               </label>
               <input className="form-control" id="email" value={item.email}
            onChange={(event) => handleChange(event, index)} required/>
             </div>
   
             <div className=" mb-3">
               <label className="form-label" for="mobileno">
                 Mobile Number
               </label>
               <input className="form-control" id="mobileno" type="number" value={item.mobileno}
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
               <input className="form-control" id="password" type="password" value={item.password}
            onChange={(event) => handleChange(event, index)} required />
             </div>
             <div className="mb-3">
               <label className="form-label" for="repeatpassword">
                 Repeat Password
               </label>
               <input className="form-control" id="repeatpassword" type="password" value={item.repeatpassword}
            onChange={(event) => handleChange(event, index)} required />
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
            </form>
         ))}
        </div>
      </div>
    </>
  );
}
