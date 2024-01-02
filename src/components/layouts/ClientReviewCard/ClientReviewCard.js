import "./ClientReviewCard.css"

const ClientReviewCard = ({name, image, designation, review, isActive, handleChange}) => {
    return(
        <div 
            className={isActive ? "clientReviewCard active": "clientReviewCard"}
            onClick={handleChange}
        >
            <div className="clientImageWrapper">
                <img src = {image} alt = "clientImage" />
            </div>

            <h3 className="clientName">{name}</h3>

            <p className="clientDesignation">{designation}</p>

            <p className="clientReview">{review}</p>
        </div>
    )
}

export default ClientReviewCard;