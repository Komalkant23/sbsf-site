const TestimonialCard = (prop) => {
    return (
        <>
            <div className="testimonyCard">
                <div className="image">
                    <img src={prop.data.img} alt="img"/>
                </div>
                <p>{prop.data.paragraph}</p>
                <h5>{prop.data.name}</h5>
                <span>{prop.data.position}</span>
                <span>{prop.data.location}</span>
            </div>
        </>
    )
}
export default TestimonialCard