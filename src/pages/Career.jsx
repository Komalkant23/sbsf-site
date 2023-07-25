import "../Styles/Career.css"
import JoinUs from "../Components/JoinUs"
import Jobs from "../Components/Jobs"

const Career = () => {
    const joinUs = {
        header: "Join Us",
        para1: "We are constantly looking for talented and passionate individuals who share our values and are committed to making a positive impact. We offer various opportunities across different departments, including:",
        requirements: [
            {
                title: "Program Implementation:",
                content: "We are looking for individuals who are passionate about creating and implementing programs that benefit the underprivileged communities we serve."
            },
            {
                title: "Fundraising and Communications:",
                content: "We are looking for individuals with exceptional communication and networking skills to help us raise funds and create awareness about our mission."
            },
            {
                title: "Administration and Finance:",
                content: "We are looking for individuals who are organized and detail-oriented to help us manage our day-to-day operations and finances."
            },
            {
                title: "Human Resources:",
                content: "We are looking for individuals who are passionate about building and managing teams to help us attract and retain talented individuals."
            },
            {
                title: "Research and Development:",
                content: "We are looking for individuals who are curious and innovative to help us identify new and effective ways to address poverty."
            },
            {
                title: "Volunteer Management:",
                content: "We are looking for individuals who are passionate about engaging and managing volunteers to help us achieve our mission."
            },
        ],
        para2: "We offer opportunities for professional development and growth.",
        para3: `To apply for a position with us, please send your resume and cover letter to our HR department at contact-us@sbftrust.com. We review applications on a rolling basis and will contact you if we think you are a good fit for our team.`,
        para4: "Thank you for considering a career with Sahajjyer Haath. Together, we can make a difference in the lives of those who need it the most."
    }

    const volunteer = {
        header: "Volunteer with us",
        paragraphs: [
        "We are a non-governmental organization dedicated to alleviating poverty and enhancing the dignity of underprivileged people. Our mission is to bring hope to those with none, promote growth and change the lives of everyone we work with, including our staff, donors, volunteers, and partners.",
        'To get started, please fill out our Google form, which can be accessed by clicking the "apply" button below. This form will help us better understand your skills and interests and match you with the right volunteering opportunity.',
        "Once we receive your application, our team will review it and get back to you within a week. We'll discuss available opportunities that align with your skills, interests, and schedule.",
        "Thank you again for considering volunteering with Sahajjyer Haath. Your contribution will make a meaningful difference in the communities we serve."
        ],
        link: "https://forms.gle/mAVxFgy5zMN8QycHA"
    }

    const internship = {
        header: "Internship",
        paragraphs: [
        "We offer exciting and meaningful internship opportunities that provide hands-on experience in the field of social welfare. As an intern, you will work closely with our team and gain valuable skills in project management, research, fundraising, communications, and community engagement.",
        'To apply for an internship with us, please fill out this Google Form with your contact information, resume, and cover letter explaining why you want to intern with Sahajjyer Haath and what skills and experience you can bring to our organization.',
        "We review internship applications on a rolling basis and will contact you if we think you are a good fit for our team. We look forward to hearing from you and working together to make a positive impact in the lives of those who need it most.",
        ],
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfE2z87iQ4izlrR0IBBim580jLHNeKxKGHBxl20QxQ6PB-3kA/viewform?usp=sf_link"
    }
    return (
        <>
            <div className="careerHeaderImg">
                <h1>Career</h1>
            </div>
            <JoinUs data={joinUs}/>
            <div className="jobsSection">
                <div className="jobsContainer">
                    <Jobs data={volunteer}/>
                    <Jobs data={internship}/>
                </div>
            </div>
        </>
    )
}

export default Career