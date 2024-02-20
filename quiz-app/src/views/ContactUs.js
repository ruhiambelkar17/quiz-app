import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  const [inputs, setInputs] = useState([
    { username: "", email: "", message: "" },
  ]);

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    console.log(onChangeValue);
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const SubmitMessage = () => {
    setInputs([...inputs, { username: "", email: "", message: "" }]);
    console.log("**users", inputs);
  };
  return (
    <>
    <Navbar></Navbar>
      <div className="row">
        <div className="col-md-6 offset-3 rounded shadow mt-5">
        <div className="m-5">
        <h3>Contact Us</h3>
       {inputs.map((item,index)=>(
         <form key={index}>
         <div className="mb-3">
           <label className="form-label" for="name">
             {" "}
             User Name
           </label>
           <input
             className="form-control"
             type="text"
             name="username"
             value={item.username}
             onChange={(event) => handleChange(event, index)}
             required
           />
         </div>
         <div className="mb-3">
           <label className="form-label" for="email">
             {" "}
             E-mail
           </label>
           <input
             className="form-control"
             type="text"
             name="email"
             value={item.email}
             onChange={(event) => handleChange(event, index)}
             required
           />
         </div>
         <div className="mb-3">
           <label className="form-label" for="message">
             {" "}
             Your message
           </label>
           <textarea
             className="form-control"
             type="text"
             name="message"
             value={item.message}
             onChange={(event) => handleChange(event, index)}
             required
           />
         </div>
         <div>
           <button className="btn btn-primary" onClick={SubmitMessage}> Submit</button>
         </div>
       </form>
       ))}
      </div>
        </div>
      </div>
    </>
  );
}
