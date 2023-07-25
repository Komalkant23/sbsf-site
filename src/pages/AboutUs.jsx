import "../Styles/About.css";
import AboutComponent from "../Components/About";
import vision from "../assets/icons8-head-profile-100.png";
import mission from "../assets/icons8-mission-64.png";
import goal from "../assets/icons8-goal-100.png"
import AboutWork from "../Components/AboutWork";
import InitiativeComponent from "../Components/Initiative";
import food from "../assets/icons8-food-donor-100.png"
import clothes from "../assets/icons8-open-box-100(1).png"
import education from "../assets/icons8-knowledge-sharing-100.png"
import health from "../assets/icons8-examination-100.png"
import business from "../assets/icons8-meeting-100.png"
import sbsbg from "../assets/sbs-bg.jpg"

const About = () => {
  const about = {
    header: "About us:",
    intro: "Sahajjyer Haaath, a social welfare wing of Sharbabharatiya Sylheti Forum was formed in the month of October, 2021 which envisions growing as an idea across regions using urban discard as a tool to alleviate poverty and enhance the dignity of the underprivileged people. It started with a simple idea to address basic, but often ignored needs of the people.",
    content: [
        {
            title: "Vision:",
            content: "We are committed to create strong and Sustainable society without inequalities and discrimination, and where everybody enjoys equal opportunities.",
            img: vision,
        },
        {
            title: "Mission:",
            content: "To Foster Democratic & Equitable Living Environment, where all Vulnerable people especially underprivileged, women and Children have to access to Education, Health, Sustainable Livelihood opportunity and essential infrastructure services irrespective of their economic and social status.",
            img: mission,
        },
        {
            title: "Goal:",
            content: "Over all Socio-Economic Development of underprivileged people specially women and children.",
            img: goal,
        }
    ]

  };

  const aboutWork = {
    header: "How we work:",
    intro: "At Sahajjyer Haath, we believe in working closely with communities to understand their needs and develop initiatives that are sustainable and impactful. We follow a four-step approach to our work:",
    content: [
      {
        title: "Identifying Needs:",
        content: "We work with communities to identify their most pressing needs, whether it be food, shelter, education, or healthcare."
      },
      {
        title: "Developing Solutions:",
        content: "Our team works closely with volunteers, partners, and donors to develop innovative solutions that address the identified needs. We prioritise initiatives that are sustainable and scalable, ensuring that they have a lasting impact."
      },
      {
        title: "Implementation:",
        content: "Once we have developed a solution, we work with communities to implement it. Our team ensures that initiatives are run efficiently and effectively, maximising impact and minimising waste."
      },
      {
        title: "Evaluation:",
        content: "We continuously evaluate the impact of our initiatives, seeking feedback from communities and partners to ensure that we are meeting their needs. We use this information to improve our initiatives and develop new ones."
      }
    ]
  }

  const initiative = {
    intro: "Our team consists of passionate individuals who come from diverse backgrounds and share a common goal of making a positive impact on society. We work closely with volunteers, partners, and donors to ensure that our initiatives are sustainable and impactful.",
    header: "Some of our initiatives include:",
    content: [
      {
        img: food,
        boldText: "Providing food ",
        text: "and shelter to homeless people",
      },
      {
        img: clothes,
        boldText: "Distributing clothes ",
        text: "and blankets during winter months",
      },
      {
        img: education,
        boldText: "Offering education ",
        text: "and vocational training programs to underprivileged youth",
      },
      {
        img: health,
        boldText: "Organising health ",
        text: "camps to provide free medical check-ups and treatments",
      },
      {
        img: business,
        boldText: "Supporting small-scale entrepreneurs ",
        text: "through microfinance and skill-building programs",
      },
    ]
  }

  return (
    <>
      <div className="aboutImg">
        <img
          src={sbsbg}
          alt="img"
        />
      </div>
      <AboutComponent data={about}/>
      <AboutWork data={aboutWork}/>
      <InitiativeComponent data={initiative}/>
    </>
  );
};

export default About;
