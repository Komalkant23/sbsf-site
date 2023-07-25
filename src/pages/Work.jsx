import "../Styles/Work.css"
import OurWork from "../Components/OurWork"
import education from "../assets/Education.jpg"
import health from "../assets/health.jpg"
import women from "../assets/women.jpg"
import disaster from "../assets/disaster.jpg"

const Work = () => {
    const data = [
        {
            title: "Education",
            img: education,
            content: [
                {
                    title: "Smart Start",
                    content: "Giving children the tools they need to succeed"
                },
                {
                    title: "Campus Crusade",
                    content: "Empowering underprivileged children through education"
                }
            ]
        },
        {
            title: "Health",
            img: health,
            content: [
                {
                    title: "Mental Health Matters",
                    content: "Raising awareness about mental health issues and offering counseling services."
                },
                {
                    title: "Hope in Health",
                    content: "Sahajjyer Haath Offering medical and psychological support to patients with chronic diseases."
                }
            ]
        },
        {
            title: "Women Empowerment",
            img: women,
            content: [
                {
                    title: "Power To Period",
                    content: "Campaign to Promote Positive Menstrual Hygiene,Break the taboos and end the stigma surrounding menstruation Raise awareness about the challenges regarding access to menstrual products,"
                },
                {
                    title: "Rise Up Women",
                    content: "This program focused on helping women overcome obstacles and achieve their full potential."
                }
            ]
        },
        {
            title: "Disaster Response",
            img: disaster,
            content: [
                {
                    title: "Action Aid",
                    content: "Flood Response and Rehabilitation Program. They have a disaster response team that works to provide immediate relief to those affected by floods."
                },
                {
                    title: "Habitat for Humanity",
                    content: "Sahajjyer Haath have a flood relief program that works to provide immediate assistance to those affected by floods, including emergency shelter and supplies."
                }
            ]
        }
    ]
    return (
        <>
            {data.length!==0 && data.map((element, index)=>(
                <div key={index} className={`ourWorkContainer ourWorkContainer${index%2}`}>
                    <OurWork data={element}/>
                </div>
            ))}
        </>
    )
}

export default Work