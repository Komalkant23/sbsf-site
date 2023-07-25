import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactDetails = (prop) => {
    const navigate = (link) => {
        window.open(link, "_blank");
    }

    return (
        <>
            <div className="detailsContainer">
                <div className="details">
                    <div><FaPhone /><span>{prop.data.phone}</span></div>
                    <div><FaEnvelope/><span>{prop.data.email}</span></div>
                    <div><FaMapMarkerAlt/><span>{prop.data.location}</span></div>
                </div>
                <div className="iconContainer">
                    <FaFacebook onClick={()=>navigate("https://www.facebook.com/ShorbobharotiyoSylhetiForum?mibextid=ZbWKwL")}/>
                    <FaTwitter onClick={()=>navigate("www.twitter.com/SylhetiForum?t=AVquOuHlLjTVdPsUnRpiUw&s=09")}/>
                    <FaInstagram onClick={()=>navigate("https://instagram.com/sarbabharatiya_sylheti_forum?igshid=MTg0ZDhmNDA=")}/>
                </div>
            </div>
        </>
    )
}

export default ContactDetails