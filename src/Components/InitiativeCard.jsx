const InitiativeCard = (prop) => {
    return (
        <>
            <div className="initiativeCard">
                <div className="icon">
                    <img src={prop.data.img} alt="img"/>
                </div>
                <div className="text">
                    <p>
                        <span>{prop.data.boldText}</span>
                        {prop.data.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default InitiativeCard