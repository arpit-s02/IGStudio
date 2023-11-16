import Introduction from "../Introduction/Introduction";
import SuccessRateWrapper from "../SuccessRateWrapper/SuccessRateWrapper";
import "./Content.css";

const Content = () => {
  return (
    <section className="contentSection">
        <Introduction />

        <SuccessRateWrapper />
    </section>
  )
}

export default Content;