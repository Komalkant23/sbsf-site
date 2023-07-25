const Content = (prop) => {
    return (
        <>
            <div className="contentContainer">
                <div className="icon">
                    <img src={prop.data.img}/>
                </div>
                <div className="content">
                    <h5>{prop.data.title}</h5>
                    <p>{prop.data.content}</p>
                </div>
            </div>
        </>
    )
}

export default Content