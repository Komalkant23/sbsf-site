import { FaTimes, FaLock } from "react-icons/fa";
import donate from "../assets/donate.jpg";
import qr from "../assets/Screenshot 2023-06-26 105439.png"

const DonateModal = (prop) => {
  const hideModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.remove("showModal");
  };
  return (
    <>
      <div id="modal" className="donateModal">
        <FaTimes className="close" onClick={hideModal} />
        <div className="donateContainer">
          <div className="head">
            <h4>{prop.data.titleHeader}</h4>
          </div>
          <div className="donateBody">
              <div className="child">
                <div className="donateImg">
                  <img src={donate} />
                </div>

                <p>{prop.data.para1}
                  <b> {prop.data.boldPara1}</b>
                  {prop.data.para2}
                  <b> {prop.data.boldPara2}</b>                 
                </p>
              </div>
              <div className="child">
                <div>
                  <h4>{prop.data.paymentHeader} <span><FaLock/>Secure</span></h4>
                </div>
                <div className="accountNumber">
                  <h5>{prop.data.name}</h5>
                  <p>{prop.data.accountNo}</p>
                  <p>{prop.data.ifscCode}</p>
                  <p>{prop.data.branchName}</p>
                </div>
                <div>
                  <h6>
                    Please send your transaction name & details to this number
                  </h6>
                  <div>For any query: +91 9127525851</div>
                </div>
              </div>
              <div className="child">
                <img src={qr}/>
              </div>
            </div>
          <div className="foot">
          <i>{prop.data.foot}</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateModal;
