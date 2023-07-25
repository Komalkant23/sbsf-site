import AboutWorkContent from "./AboutWorkContent"
const JoinUs = (prop) => {
    return (
        <>
            <div className="joinUsSection">
                <h4 className="sectionHeader">{prop.data.header}</h4>
                <div className="joinUsContainer">
                    <p>{prop.data.para1}</p>
                    <div className="jobRequirements">
                        {prop.data.requirements.lenght!==0 && prop.data.requirements.map((element,index)=>(
                            <AboutWorkContent key={index} data={element}/>
                        ))}
                    </div>
                    <p>{prop.data.para2}</p>
                    <p>{prop.data.para3}</p>
                    <p>{prop.data.para4}</p>
                </div>
            </div>
        </>
    )
}

export default JoinUs