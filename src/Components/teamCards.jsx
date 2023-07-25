import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamCards = (prop) => {
    return (
        <>
         <div className={`teamCardContainer ${prop.data.class? prop.data.class : ""}`}>
            <img src={prop.data.img}/>
            <div className="cardInfo">
                <strong>{prop.data.name}</strong>
                <div>{prop.data.designation}</div>
                <div>{prop.data.location}</div>
                <div className='teamCardIcons'>
                    <a href={prop.data.fb} target="_blank" rel='noreferrer'>
                        <FaFacebookF />
                    </a>
                    <a href={prop.data.twitter} target="_blank" rel='noreferrer'>
                        <FaTwitter />
                    </a>
                    <a href={prop.data.linkedIn} target="_blank" rel='noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a href={prop.data.instagram} target="_blank" rel='noreferrer'>
                        <FaInstagram />
                    </a>
                </div>
            </div>
         </div>
        </>
    )
}

export default TeamCards