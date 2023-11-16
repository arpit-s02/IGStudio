import HeroInfo from "../HeroInfo/HeroInfo";
import Navbar from "../Navbar/Navbar";
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <Navbar />

        <HeroInfo />
    </div>
  )
}

export default Hero;