import PropTypes from "prop-types";
import "../Styles/Contributors.css";
import Ratnadeep from "../assets/Ratnadeep-Das.png";
import event from "../assets/sbs-bg.jpg";

const pointOfContactData = [
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
];

const powerfulVolunteerData = [
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
  {
    name: "Ratnadeep Das",
    photo: Ratnadeep,
    location: "Silchar",
    designation: "Golden hand",
  },
];

const eventDetails = [
  {
    photo: event,
    description: "Short details...",
  },
  {
    photo: event,
    description: "Short details...",
  },
];

const Contributors = () => {
  return (
    <div>
      <div className="header">
        <h1>Silchar</h1>
        <p>Details about Silchar</p>
      </div>
      <div className="container">
        <div className="pointOfContact">
          <div className="contacts">
            <div className="poc">Point of contact</div>
            <div className="line1"></div>
            <div className="contactContainter">
               {pointOfContactData.map((contact, index) => (
              <PointOfContact cObj={contact} key={index} />
            ))}</div>
           
          </div>
        </div>
          <div className="pVolunteers"></div>
          <div className="powerfulVolunteers">
          <div className="pv">Powerful volunteers</div>
          <div className="line2"></div>
          <div className="volunteers">
            {powerfulVolunteerData.map((volunteer, index) => (
              <PowerfulVolunteers pObj={volunteer} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="event">
        {eventDetails.map((event, index) => (
          <div className="events" key={index}>
            <img src={event.photo} alt="Event-photo" />
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function PointOfContact({ cObj }) {
  // console.log(cObj);
  return (
    <div className="contact">
      <img src={cObj.photo} alt="Contributor-photo" />
      <div>
        <h3>{cObj.name}</h3>
        <p>{cObj.location}</p>
        <h4>{cObj.designation}</h4>
      </div>
    </div>
  );
}

function PowerfulVolunteers({ pObj }) {
  return (
    <div className="volunteer">
      <img src={pObj.photo} alt="Contributor-photo" />
      <div>
        <h3>{pObj.name}</h3>
        <p>{pObj.location}</p>
        <h4>{pObj.designation}</h4>
      </div>
    </div>
  );
}

PointOfContact.propTypes = {
  cObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
  }).isRequired,
};

PowerfulVolunteers.propTypes = {
  pObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contributors;
