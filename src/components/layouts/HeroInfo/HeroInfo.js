import Lawyer from "../../../assets/lawyer.png";
import HeroDetails from "../HeroDetails/HeroDetails";
import "./HeroInfo.css"

const HeroInfo = () => {
  return (
    <div className="heroInfo">
        <HeroDetails />

        <div className="lawyerImageWrapper">
            <img src = {Lawyer} alt = "lawyerImage"/>
        </div>
    </div>
  )
}

export default HeroInfo;