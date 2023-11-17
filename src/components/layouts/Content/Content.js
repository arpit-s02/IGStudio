import Introduction from "../Introduction/Introduction";
import PracticeAreasWrapper from "../PracticeAreasWrapper/PracticeAreasWrapper";
import SuccessRateWrapper from "../SuccessRateWrapper/SuccessRateWrapper";
import "./Content.css";

const Content = () => {
  return (
    <section className="contentSection">
        <Introduction />

        <SuccessRateWrapper />

        <PracticeAreasWrapper />
    </section>
  )
}

export default Content;