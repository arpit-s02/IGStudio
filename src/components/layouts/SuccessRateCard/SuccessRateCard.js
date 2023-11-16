import { ReactComponent as GiftIcon } from "../../../assets/giftIcon.svg";
import "./SuccessRateCard.css"

const SuccessRateCard = ({successRate, content, isActive, handleChange}) => {
  return (
    <div 
        className={isActive ? "successRateCard active" : "successRateCard"}
        onClick={handleChange}
    >
        <div className="iconWrapper">
            <GiftIcon />
        </div>

        <h3>{successRate}% Success Rate</h3>

        <p>{content}</p>

        <div className="readMoreButton">
            <span>Read More</span>
        </div>
    </div>
  )
}

export default SuccessRateCard;