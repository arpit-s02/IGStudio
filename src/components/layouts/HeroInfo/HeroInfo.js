import {ReactComponent as MailIcon} from "../../../assets/mailIcon.svg";
import Lawyer from "../../../assets/lawyer.png";
import "./HeroInfo.css"

const HeroInfo = () => {
  return (
    <div className="heroInfo">
        <div className="heroDetails">
            <p className="tagline">
                You don't have to <span>Fight them Alone.</span>
            </p>

            <p className="about">
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
            </p>

            <div className="emailBox">
                <MailIcon className="mailIcon"/>

                <input 
                    type = "email" 
                    className="mailInput"
                    placeholder="Enter your email address"
                />

                <button className="submitButton">
                    Let’s Talk
                </button>
            </div>
        </div>

        <div className="lawyerImageWrapper">
            <img src = {Lawyer} alt = "lawyerImage"/>
        </div>
    </div>
  )
}

export default HeroInfo