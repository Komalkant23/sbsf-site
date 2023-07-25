import SimpleSlider from "../Components/Teams"
import Helpers from "../Components/Helpers"
import Posters from "../Components/Posters"
import Carousel from "../Components/Carousel"
import DonateModal from "../Components/DonateModal" 
import Debabani from "../assets/Debabani.jpeg"
import Hirokendu from "../assets/Hirokendu.jpg" 
import Rupa from "../assets/Rupa.jpg"
import Sudip from "../assets/Sudip.jpg"
import Debashis from "../assets/Debashish.jpg"
import Manab from "../assets/Manab.jpg"
import Shelly from "../assets/Shelly.jpg"
import NoPoverty from "../assets/NoPoverty.png"
import GoodHealth from "../assets/GoodHealth.png"
import QualityEducation from "../assets/QualityEducation.png"
import CLimateAction from "../assets/ClimateAction.png"
import ReducedInequality from "../assets/ReducedInequaities.png"
import GenderEquality from "../assets/GenderEquality.png"
import LocationButtons from "../Components/LocationButton"
import ReachComponent from "../Components/Reach"
import Map from "../assets/map.png"

const Home = () => {
    
    const helpersColumn1 = [
        {
            name: "Debabani Choudhury",
            location: "California, USA",
            rank: "Platinum Hand",
            img: Debabani
        },
        {
            name: "Hirokendu Das",
            location: "Silchar",
            rank: "Golden Hand",
            img: Hirokendu
        },
        {
            name: "Rupa Bhattacharya",
            location: "Silchar",
            rank: "Golden Hand",
            img: Rupa
        },
        {
            name: "Sudip Das",
            location: "Silchar",
            rank: "Golden Hand",
            img: Sudip
        },
    ]

    const helpersColumn2 = [
        {
            name: "Debashis Das",
            location: "England, UK",
            rank: "Diamond Hand",
            img: Debashis
        },
        {
            name: "Manab Bhattacharjee",
            location: "Silchar",
            rank: "Golden Hand",
            img: Manab
        },
        {
            name: "Shelley Talukdar",
            location: "Silchar",
            rank: "Golden Hand",
            img: Shelly
        },
    ]
    const otherHelpers = [
        {
            name: "Sucheta Chakraborty",
            location: "Allahabad"
        },
        {
            name: "Arabinda Biswas",
            location: "Silchar"
        },
        {
            name: "Sarbajeet Dutta",
            location: "Delhi"
        },
        {
            name: "Gayatri Nath Choudhary",
            location: "Silchar"
        },
        {
            name: "Satarupa Shome Choudhary",
            location: "Pune"
        },
        {
            name: "Pinak Pani Paul",
            location: "Bangalore"
        },
        {
            name: "Amit kumar Saha",
            location: "Bangalore"
        },
        {
            name: "Arundhati Deb",
            location: "Chennai"
        },
    ]

    const donateData = {
        titleHeader: "Donate Now",
        para1: "Yes, one donation has the power to bring a smile to someone's face. Donating to a charity or a cause can make a difference in someone's life, whether it's providing",
        para2:"Your donation can help create a positive impact on someone's life and can bring happiness to them. Additionally, knowing that you have helped someone in need can also bring a sense of satisfaction and happiness to you.",
        boldPara1: "food, shelter, healthcare, education, or any other basic need.",
        boldPara2: "So, even a small donation can make a big difference and bring a smile to someone's face.",
        paymentHeader: "Choose Payment",
        name: "Sharbabharatiya Sylheti Forum Trust",
        accountNo: "Account number: 110040263480",
        ifscCode: "IFSC Code: CNRB0003050",
        branchName: "Canara Bank, Silchar 1 Branch",
        foot: 'YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION 80G AS Sharbabharatiya Sylheti forum IS REGISTERED AS NON PROFIT ORGANIZATION"'
    }

    const posters = [
        {img: NoPoverty, text: "Aims to end poverty in all its forms everywhere. Its objectives include ensuring that the poorest and most vulnerable have equal rights to economic resources and access to basic services"},
        {img: GoodHealth, text: "Ensure healthy lives and promote well-being for all at all ages."},
        {img: QualityEducation, text: "Aims at providing universal quality education and lifelong learning, These include literacy, numeracy, life skills and peace education - as well as science and social studies. Literacy. Literacy, or the ability to read and write."},
        {img: ReducedInequality, text: "Aims to end poverty in all its forms everywhere. Its objectives include ensuring that the poorest and most vulnerable have equal rights to economic resources and access to basic services"},
        {img: CLimateAction, text: "Aims to take urgent action to combat climate change and its impacts pertains to climate change."},
        {img: GenderEquality, text: "Focused on pursuing the main goal of real and sustained gender equality in all aspects of women and girls' lives which includes ending gender disparities, eliminating violence against women and girls' lives, eliminating early and forced marriage, securing equal participation and opportunities."},
    ]

    const reachData = {
        header: "Our Reach",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat adasfffffagajkgha sdhsdh jhgdh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat fffsfwe",
        numbers: [
            {count: 3, title: "States"},
            {count: `${20}+`, title: "Projects"},
            {count: 2, title: "Villages Adopted"},
        ],
        img: Map
    }

    const locations = ["Silchar", "Karimganj", "Bangalore", "Agartala", "Hailakandi"]
    return (
        <>  
            <Carousel/>
            <LocationButtons data={locations}/>
            <ReachComponent data={reachData}/>
            <SimpleSlider/>
            <Helpers helpersColumn1={helpersColumn1} helpersColumn2={helpersColumn2} otherHelpers={otherHelpers}/>
            <Posters data={posters}/>
            <DonateModal data={donateData}/>
        </>
    )
}

export default Home