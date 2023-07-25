const FooterCard = (prop) => {
    return (
        <>
            <div>
                <h4 className="footerCardHeader">{prop.data.title}</h4>
                {prop.data.elements && prop.data.elements.map((element, index)=>(
                    <div className="footerElements" key={index}>{element}</div>
                ))}
            </div>
        </>
    )
}

export default FooterCard