import "../Styles/Buttons.css"

const LocationButtons = (prop) => {
    return(
        <>
          <div className="buttonSection">
            <div className="btnContainer">
                {prop.data.length!==0 && prop.data.map((ele,index)=>(
                    <button className={`locationBtn${index%2}`} key={index}>{ele}</button>
                ))}
            </div>
          </div>  
        </>
    )
}

export default LocationButtons