const HelperCard = (prop) => {
    return(
        <>
            <div className="helperCard">
                <div>
                    <img src={prop.data.img} alt="img"></img>
                </div>
                <div>
                    <h4>{prop.data.name}</h4>
                    <p>{prop.data.location}</p>
                    <p>{prop.data.rank}</p>
                </div>
            </div>
        </>
    )
}

export default HelperCard