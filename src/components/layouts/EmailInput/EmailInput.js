import {ReactComponent as MailIcon} from "../../../assets/mailIcon.svg";
import "./EmailInput.css"

const EmailInput = () => {
    return (
        <div className="emailInput">
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
    )
}

export default EmailInput;