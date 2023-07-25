import icon from "../../assets/Icon PNG.png";

const Logo = () => {
    return (
        <>
            <div className="logo">
                <img className="icon" src={icon} alt="icon"/>
                <div className="logoText">
                    <div className="name">Sharbabharatiya</div>
                    <div className="name1">Sylehti forum trust</div>
                    <hr/>
                    <div className="pos">
                        <span className="name2">Sahajjyer Haath</span>
                        <span className="name3">A unit of Sharbabharatiya Sylehti forum</span>
                    </div>
                    <div className="nitiayogID pos"><span>Nitiayog id : AS/2022/0304986</span></div>
                </div>
            </div>
        </>
    )
}

export default Logo