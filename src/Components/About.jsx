import Content from "./AboutContent"

const AboutComponent = (prop) => {
    return(
        <>
            <div className="aboutSection">
                <h4 className="sectionHeader">{prop.data.header}</h4>
                <div className="intro">
                    <p>{prop.data.intro}</p>
                </div>
                <div className="aboutContent">
                    <div className="contentBox">
                        {prop.data.content.length!==0 && prop.data.content.map((content, index)=>(
                            <Content key={index} data={content}/>
                        ))}
                    </div>
                </div>
            </div>  
        </>
    )
}

export default AboutComponent