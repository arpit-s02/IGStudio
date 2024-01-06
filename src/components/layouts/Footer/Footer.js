import {ReactComponent as Logo} from "../../../assets/logo.svg"
import {ReactComponent as InstagramIcon} from "../../../assets/instagram.svg"
import {ReactComponent as FacebookIcon} from "../../../assets/facebook.svg"
import {ReactComponent as TwitterIcon} from "../../../assets/twitter.svg"
import {ReactComponent as PinterestIcon} from "../../../assets/pinterest.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerNavbar">
                <Logo />

                <div className="footerNavlinks">
                    <p className="navigationLink">Home</p>
                    <p className="navigationLink">Attorneys</p>
                    <p className="navigationLink">Practice Areas</p>
                    <p className="navigationLink">About Us</p>
                </div>

                <div className="socialIconsContainer">
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                </div>
            </div>

            <div className="termsContainer">
                <p>© 2020 Acme. All right reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    )
}

export default Footer;