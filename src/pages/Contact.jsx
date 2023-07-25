import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Form from "../Components/CommonComponents/Form";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="contactInfo">
          <p>
            <FaPhone /> 9127525760
            <br />
            <br />
            <MdEmail /> contact-us@sbftrust.com
            <br />
            <br />
            <MdLocationPin /> Silchar, Dist. Cachar, Assam
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
