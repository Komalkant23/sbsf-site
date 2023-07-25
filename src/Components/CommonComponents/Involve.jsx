const InvolveComponent = (prop) => {
    return (
        <>
            <div className="involveContainer">
                {prop.data.length!==0 && prop.data.map((element, index)=>(
                    <div key={index}>
                        <div><img src={element.img} alt={element.alt}/></div>
                        <span>{element.title}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default InvolveComponent