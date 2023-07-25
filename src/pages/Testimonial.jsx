import TestimonialCard from "../Components/TestimonialCard"
import "../Styles/Testimony.css"
import debjit from "../assets/Debjit Paul.jpg"
import yudhijit from "../assets/Yudhijit Bhattacharjee - Need to Crop & brightness.jpg"
import manmohan from "../assets/Manmohan.jpg"

const Testimonials = () => {
    const data = [
        {
            img: yudhijit,
            paragraph: "SBSF has brought together the Sylheti community in an unprecedented way, demonstrating that social media can be a force of good in the world. What’s remarkable about the forum is that it has provided Sylhetis around the world not only to work together to preserve their language, culture and history but also provided an opportunity to help those in need both within and outside the community. I know that Shahajyer Haath has done some amazing projects in the past two years for Underprivileged Children, Woman and for our environment. I wish this forum continued success!",
            name: "- Yudhijit Bhattacharjee",
            position: "Writer at National Geographic Magazine and The New York Times",
            location: "Washington D.C., USA"
        },
        {
            img: debjit,
            paragraph: "Thank you SBSF for leading the effort to bind us with a common thread and make us feel proud about being Sylheti. Wish you success with all the ventures as well as the philanthropic activities.",
            name: "- Debjit",
            position: "Entrepreneur & Engineer by profession",
            location: "Canada"
        },
        {
            img: manmohan,
            paragraph: "সর্বভারতীয় সিলেটি ফোরাম সত্যিকার অর্থে এক সম্মিলিত সমমনস্ক প্রগতিশীল গোষ্ঠী, যারা একযোগে মিলেমিশে সমাজ হিতকর নানা রকম কাজে লিপ্ত। জনমনোরঞ্জন এর পাশাপাশি জনহিতে সাহায্যের হাত বাড়িয়ে বৃহত্তর সমাজ কল্যাণ, তাদের অন্যতম কর্মকান্ড। সচেতন সমাজ এই ফোরামের মাধ্যমে নিজেদের জড়িত রাখতে পারলে তবেই আমরা বর্তমান তথা ভবিষ্যত প্রজন্মকে সঠিক পারম্পরিক সংস্কৃতির ধারা বজায় রাখার কাজ করতে পারবো বলে আমি মনেকরি।",
            name: "- মনোমোহন মিশ্র",
            position: "সম্পাদক, গতি দৈনিক পত্রিকা,",
            location: "শিলচর।"
        }
    ]
    return (
        <>
            <div className="testimonialsContainer">
                {data.length!==0 && data.map((testimony, index)=>(
                    <TestimonialCard key={index} data={testimony}/>
                ))}
            </div>  
        </>
    )
}

export default Testimonials