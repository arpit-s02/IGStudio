import EmailInput from "../EmailInput/EmailInput";
import "./HeroDetails.css"

const HeroDetails = () => {
    return (
        <div className="heroDetails">
            <p className="tagline">
                You don't have to <span>Fight them Alone.</span>
            </p>

            <p className="about">
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
            </p>

            <EmailInput />
        </div>
    )
}

export default HeroDetails;