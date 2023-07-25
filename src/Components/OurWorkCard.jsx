import { useState } from 'react';

const WorkCard  = (prop)=>{
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    };
    return (
        <>
            <div className="infoContent">
                <h5>{prop.data.title}</h5>
                <div className={`textContainer ${expand ? 'expanded' : ''}`}>
                    <p>{prop.data.content}</p>
                    <span onClick={toggleExpand}>{expand ? '-' : '+'}</span>
                </div>
            </div>
        </>
    )
}

export default WorkCard
