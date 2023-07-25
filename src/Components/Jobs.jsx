const Jobs = (prop) => {

    const openGoogleForm = (link) => {
        window.open(link, "_blank");
      };

    return (
        <>
        <div className="jobCards">
            <h4>{prop.data.header}</h4>
            <div>
                {prop.data.paragraphs.length!==0 && prop.data.paragraphs.map((para, index)=>(
                    <p key={index}>{para}</p>
                ))}
            </div>
            <button onClick={()=>openGoogleForm(prop.data.link)}>Apply</button>
        </div>
        </>
    )
}

export default Jobs