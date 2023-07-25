import { useState, useEffect } from "react"

const Numbers = (prop) => {
    const [state, setState] = useState(0)

    useEffect(()=>{
        setState(prop.data.count)
    },[prop])
    return (
        <>
            <div className="counters">
                <div>{state}</div>
                <div>{prop.data.title}</div>
            </div>
        </>
    )
}

export default Numbers