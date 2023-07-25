import AboutWorkContent from "./AboutWorkContent"

const AboutWork = (prop) => {
    return (
        <>
            <div className="aboutWorkSection">
                <h4 className="sectionHeader">{prop.data.header}</h4>
                <div className="intro">
                    <p>{prop.data.intro}</p>
                </div>
                <div className="aboutWorkContent">
                    <div className="content">
                        {prop.data.content.length!==0 && prop.data.content.map((content,index)=>(
                            <AboutWorkContent key={index} data={content}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWork