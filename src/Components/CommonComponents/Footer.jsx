import InvolveComponent from "./Involve";
import FooterCard from "./FooterCard";
import Form from "./Form";
import Donate from "../../assets/icons8-donate-60.png"
import Sign from "../../assets/icons8-letter-100.png"
import Spread from "../../assets/icons8-community-80.png"
import Phone from "../../assets/icons8-phone-100.png"

const Footer = () => {

    const involvement = [
      {
        title: "Donate",
        img: Donate,
        alt: "donate"
      },

      {
        title: "Sign Up",
        img: Sign,
        alt: "mail"
      },

      {
        title: "Spread the Word",
        img: Spread,
        alt: "spreadtheword"
      },

      {
        title: "Contact Us",
        img: Phone,
        alt: "contact"
      }

    ]

    const work = {
        title: "Our Work",
        elements: ["Education", "Health", "Livelihood", "Women Empowerment", "Disaster Response", 
        "Empowering Grassroots", "Child for Child"]
    }

    const campaigns = {
        title: "Campaigns",
        elements: ["Tayyari Kal Ki", "Shiksha Na Ruke", "Plate Half-Full", "Health Cannot Wait",
        "She Can Fly"]
    }

    const involve = {
        title: "Get Involved",
        elements: ["Individual Support", "Corporate Partnerships", "Volunteer", "Careers"]
    }

    const faq = {
        title: "Faqs",
    }

    const media = {
        title: "Media Centre",
    }

    const resource = {
        title: "Resource Centre",
        elements: ["Annual Report", "Newsletter", "Photo Journey", "Stories of Change"]
    }

  return (
    <>
      <h3 className="sectionHeader">Get Involved</h3>
      <InvolveComponent data={involvement}/>
      <div className="footerContainer">
        <div className="footerInfo">
          <div className="aboutFooter">
            <h4>About us</h4>
            <p>
              Sahajjyer Haath, a social welfare wing of Sharbabharatiya Sylheti
              Forum, was formed in October 2021 by Ratnadeep Das with a mission
              to alleviate poverty and enhance the dignity of underprivileged
              people. Over the course of one year, it has opened four branches
              in Silchar, Guwahati, Bangalore, and Karimganj, using urban
              discards as a tool to address basic needs of the people. The
              organisation is driven by a desire to bring hope and promote
              growth in the lives of everyone it works with, including staff,
              donors, volunteers, and partners. Despite the scale of crises,
              Sahajjyer Haath rises to the challenge, reimagines what is
              possible, and responds by helping those in need.
            </p>
          </div>
          <div className="footerCards">
            <FooterCard data={work}/>
            <FooterCard data={campaigns}/>
          </div>
          <div className="footerCards">
            <FooterCard data={involve}/>
            <FooterCard data={faq}/>
            <FooterCard data={media}/>
            <FooterCard data={resource}/>
          </div>
        </div>
        <Form/>
      </div>
    </>
  );
};

export default Footer;
