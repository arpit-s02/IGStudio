import ClientReviewWrapper from "../ClientReviewWrapper/ClientReviewWrapper";
import FAQWrapper from "../FAQWrapper/FAQWrapper";
import Introduction from "../Introduction/Introduction";
import NewsLetterForm from "../NewsletterForm/NewsLetterForm";
import PracticeAreasWrapper from "../PracticeAreasWrapper/PracticeAreasWrapper";
import SuccessRateWrapper from "../SuccessRateWrapper/SuccessRateWrapper";
import TeamWrapper from "../TeamWrapper/TeamWrapper";
import "./Content.css";

const Content = () => {
  return (
    <section className="contentSection">
        <Introduction />

        <SuccessRateWrapper />

        <PracticeAreasWrapper />

        <ClientReviewWrapper />

        <TeamWrapper />

        <FAQWrapper />

        <NewsLetterForm />
    </section>
  )
}

export default Content;