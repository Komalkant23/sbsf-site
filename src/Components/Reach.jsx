import Numbers from "./ReachNumbers"
import "../Styles/Reach.css"

const ReachComponent = (prop) => {
    return(
        <>
            <div className="reachSection">
                <div className="reachContainer">
                     <div className="reachDetails">
                        <h4>{prop.data.header}</h4>
                        <p>{prop.data.para}</p>
                        <div className="numberContainer">
                            {prop.data.numbers.map((ele,index)=>(
                                <Numbers key={index} data={ele}/>
                            ))}
                        </div>
                     </div>
                     <div className="reachImg">
                        <img src={prop.data.img} alt="map"/>
                     </div>
                </div>
            </div>
        </>
    )
}

export default ReachComponent