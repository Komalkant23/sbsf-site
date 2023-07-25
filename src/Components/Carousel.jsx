import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Carousel.css"
import DonateCard from "./DonateCard";
import sbsfbg from "../assets/sbs-bg.jpg"

const Carousel = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <div className="carouselContainer">
                <Slider {...settings} className="carousel">
                    <div className="slide">
                        <img src={sbsfbg}/>
                        <DonateCard/>
                    </div>
                    <div className="slide">
                        <img src={sbsfbg}/>
                        <DonateCard />
                    </div>
                    <div className="slide">
                        <img src={sbsfbg}/>
                        <DonateCard />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Carousel