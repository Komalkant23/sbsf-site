import InitiativeCard from "./InitiativeCard"

const InitiativeComponent = (prop) => {
    return (
        <>
            <div className="initiativeSection">
                <div className="initiativeContainer">
                    <p>{prop.data.intro}</p>
                    <h5>{prop.data.header}</h5>
                    <div className="initiativeCardContainer">
                        {prop.data.content.length!==0 && prop.data.content.map((content, index)=>(
                            <InitiativeCard key={index} data={content}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InitiativeComponent