const DonateCard = () => {
    const showModal = () => {
        const modal = document.getElementById("modal")
        modal.classList.add("showModal")
    }
    return(
        <>
            <div className="donateCard">
                <h1>We can change it together lets do it now!</h1>
                <p>Your small contribution can bring happiness in someones life</p>
                <button onClick={showModal}>Donate Now</button>
            </div>
        </>
    )
}

export default DonateCard