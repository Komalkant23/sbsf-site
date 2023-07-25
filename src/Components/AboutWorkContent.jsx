const AboutWorkContent = (prop) => {
    return (
        <>
            <div className="aboutWorkContentCard">
                <h5>{prop.data.title}</h5>
                <p>{prop.data.content}</p>
            </div>
        </>
    )
}

export default AboutWorkContent