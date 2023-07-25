import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCards from "./teamCards";
import "../Styles/Teams.css"
import Ratnadeep from "../assets/Ratnadeep-Das.png"
import Paritosh from "../assets/Paritosh-Bhattacharjee.png"
import Mitra from "../assets/Mitra-Goswami.png"
import Piyush from "../assets/Pijush-Deb-Roy.png"
import Saumendu from "../assets/sb.png"
import Atanu from "../assets/Atanu-Nath-re.png"
import Kunjashree from "../assets/kunjashree.png"
import Samik from "../assets/smik.png"

const SimpleSlider = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slide1 = [
    {
      name: "Ratnadeep Das",
      designation: "Founder & President",
      location: "Bangalore, India",
      img: Ratnadeep,
      fb: "https://www.facebook.com/ratanadeep?mibextid=ZbWKwL",
      twitter: "http://www.twitter.com/SylhetiForum?t=OnHb0WQcklgH3-7pbfoGPw&s=09",
      linkedIn: "http://www.linkedin.com/in/ratnadeep-das",
      instagram: "http://www.linkedin.com/in/ratnadeep-das"
    },
    {
      name: "Paritosh Bhattacharjee",
      designation: "Vice President",
      location: "Silchar, India",
      img: Paritosh,
      fb: "https://www.facebook.com/paritosh.bhattacharjee.96?mibextid=ZbWKwL",
      twitter: "https://twitter.com/Paritos47718392?t=-itQmF5aLUWXS9SVll--wg&s=09",
      linkedIn: "https://www.linkedin.com/company/helping-hands-foundation-sbsf/",
      instagram: "https://instagram.com/bhattacharjeeparitosh?igshid=MTg0ZDhmNDA="
    },
    {
      name: "Mitra Goswami",
      designation: "General Secretary",
      location: "Silchar, India",
      img: Mitra,
      fb: "https://www.facebook.com/mitra.goswami.7712?mibextid=ZbWKwL",
      twitter: "http://www.twitter.com/SylhetiForum?t=AVquOuHlLjTVdPsUnRpiUw&s=09",
      linkedIn: "http://www.linkedin.com/company/helping-hands-foundation-sbsf/",
      instagram: "https://instagram.com/mitragoswami_?igshid=MTg0ZDhmNDA="
    }
  ]

  const slide2 = [
    {
      name: "Pijush Deb Roy",
      designation: "Head-Finance & Audit",
      location: "Silchar, India",
      img: Piyush,
      class: "reverseCards",
      fb: "https://www.facebook.com/pijush.debroy.1?mibextid=ZbWKwL",
      twitter: "https://twitter.com/PIJUSHDEBROY3?t=8SPYc_X-yhmuTJbt11ABTQ&s=09",
      linkedIn: "https://www.linkedin.com/company/helping-hands-foundation-sbsf%20",
      instagram: "https://instagram.com/sahajjyer_haath?igshid=MTg0ZDhmNDA=%20"
    },
    {
      name: "Saumendu Bhattacharjee",
      designation: "Chief Executive Advisor",
      location: "Hyderabad, India",
      img: Saumendu,
      class: "reverseCards",
    },
    {
      name: "Atanu Nath",
      designation: "Head-Digital Media",
      location: "Assam, India",
      img: Atanu,
      class: "reverseCards",
      fb: "https://www.facebook.com/atanuation?mibextid=ZbWKwL",
      twitter: "https://twitter.com/nathatanu0?t=qnvkXN-foFVMXG42kBlaFw&s=09",
      linkedIn: "https://www.linkedin.com/in/atanu-nath-0281a125",
      instagram: "https://instagram.com/nathatanu?igshid=MTg0ZDhmNDA="
    }
  ]

  const slide3 = [
    {
      name: "Ratnadeep Das",
      designation: "Founder & President",
      location: "Bangalore, India",
      img: Ratnadeep,
      fb: "https://www.facebook.com/ratanadeep?mibextid=ZbWKwL",
      twitter: "http://www.twitter.com/SylhetiForum?t=OnHb0WQcklgH3-7pbfoGPw&s=09",
      linkedIn: "http://www.linkedin.com/in/ratnadeep-das",
      instagram: "http://www.linkedin.com/in/ratnadeep-das"
    },
    {
      name: "Kunjashree Das",
      designation: "Creative Director",
      location: "Silchar, India",
      img: Kunjashree,
      fb: "https://www.facebook.com/kunjashree.das?mibextid=ZbWKwL",
      twitter: "https://twitter.com/KunjashreeD?t=p0ntkyAjYlrSJwipGh_3-g&s=09",
      linkedIn: "https://www.linkedin.com/in/kunjashree-das-2a45b117",
      instagram: "https://instagram.com/kunjashreedas?igshid=MTg0ZDhmNDA="
    },
    {
      name: "Samik Choudhury ",
      designation: "Head of Editorial Board",
      location: "Silchar, India",
      img: Samik,
      fb: "https://www.facebook.com/samik.choudhury.1?mibextid=ZbWKwL",
    }
  ]


  return (
    <>
    <h3 className="sectionHeader">Our Team</h3>
    <div>
      <Slider {...settings} className="slidesContainer">
        <div className="slide">
          { slide1.length!==0 && slide1.map((element,index)=>(
            <TeamCards key={index} data={element} />
          ))}
          { slide2.length!==0 && slide2.map((element,index)=>(
            <TeamCards key={index} data={element} />
          ))}
        </div>
        <div className="slide">
          { slide1.length!==0 && slide3.map((element,index)=>(
            <TeamCards key={index} data={element} />
          ))}
          { slide2.length!==0 && slide2.map((element,index)=>(
            <TeamCards key={index} data={element} />
          ))}
        </div>
      </Slider>
    </div>
    </>
  );
};

export default SimpleSlider;
