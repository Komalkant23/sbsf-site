import "../Styles/Poster.css"
import { useRef } from "react"

const Posters = (prop) => {
    const posterRefs = useRef([])

    const flipped = (index) => {

        const data = posterRefs.current.filter(element=>element.classList.contains("innerPoster-flip"))

        if(!posterRefs.current[index].classList.contains("innerPoster-flip")){
            posterRefs.current[index].classList.add("innerPoster-flip")
        }
        else{
            posterRefs.current[index].classList.remove("innerPoster-flip")
        }
        if(data.length>=1){
            const element = data.filter(element=>element!==posterRefs.current[index])
            if(element.length)
            element[0].classList.remove("innerPoster-flip")
        }

    }

    return(
        <>
            <h3 className="sectionHeader">SDG POSTER AND INDIVIDUAL GOALS</h3>
            <div className="posterContainer">
                <div className="posters">
                    {prop.data.length!==0 && prop.data.map((poster, index)=>(
                        <div ref={(el) => (posterRefs.current[index] = el)} 
                            onClick={() => flipped(index)} 
                            className="innerPoster" 
                            key={index}>
                            <img src={poster.img} alt="poster"/>
                            <div className="backface">
                                <p>{poster.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Posters
