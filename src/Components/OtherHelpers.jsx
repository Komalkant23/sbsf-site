const OtherHelper = (prop) => {
    return(
        <>
            <div className="otherHelperContainer">
                <h4>Other Helping Hand</h4>
                <div className="otherHelpers">
                    {prop.data.length!==0 && prop.data.map((helpers,index)=>(
                        <div className={`helper${index%2}`} key={index}>
                            <h5>{helpers.name}</h5>
                            <p>{helpers.location}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default OtherHelper