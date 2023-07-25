import { useState } from "react";

const Form = () => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInput = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  return (
    <>
      <form className="formContainer">
        <h4>WRITE TO US</h4>
        <h5>Sarbabharatiya Sylehti Forum Trust</h5>
        <p>
          Silchar Sadar, District-Cachar, Assam.
        </p>
        <input type="text" placeholder="Name" name="name" onChange={handleInput}/>
        <input type="text" placeholder="Email" name="email" onChange={handleInput}/>
        <textarea type="text" placeholder="Message" name="message" onChange={handleInput}/>
        <button className="formBtn">Send Message</button>
      </form>
    </>
  );
};

export default Form;
