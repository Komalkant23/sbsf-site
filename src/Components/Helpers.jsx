import HelperCard from "./HelperCards";
import OtherHelper from "./OtherHelpers";

import '../Styles/Helpers.css'

const Helpers = (prop) => {

    return(
        <>
            <h3 className="sectionHeader">Our Helping Hands</h3>
            <div className="helpersContainer">
                <div className="helpers">
                    <div>
                    {prop.helpersColumn1.map((helper, index) => (
                        <HelperCard key={index} data={helper}/>
                    ))}
                    </div>
                    <div>
                    {prop.helpersColumn2.map((helper, index) => (
                        <HelperCard key={index} data={helper}/>
                    ))}
                    </div>
                </div>
                <OtherHelper data={prop.otherHelpers}/>
            </div>
        </>
    )
}

export default Helpers