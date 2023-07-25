import WorkCard from "./OurWorkCard"
const OurWork = (prop) => {
    return (
        <>
            
            <div className="ourWorkCard">
                <div className="image">
                    <h4>{prop.data.title}</h4>
                    <div>
                        <img src= {prop.data.img} alt="img"/>
                    </div>
                </div>
                <div className="infoContainer">
                    {prop.data.content.length!==0 && prop.data.content.map((element,index)=>(
                        <WorkCard key={index} data={element}/>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default OurWork