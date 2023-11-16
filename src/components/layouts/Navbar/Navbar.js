import { ReactComponent as Logo } from "../../../assets/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <Logo />

        <div className="navigationLinksWrapper">
            <p className="navigationLink">Home</p>
            <p className="navigationLink">Attorneys</p>
            <p className="navigationLink">Practice Areas</p>
            <p className="navigationLink">About Us</p>
        </div>

        <button className="contactButton">
          Contact Now
        </button>
    </div>
  )
}

export default Navbar