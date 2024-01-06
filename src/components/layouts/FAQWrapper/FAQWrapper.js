import AccordionWrapper from "../AccordionWrapper/AccordionWrapper";
import "./FAQWrapper.css"

const FAQWrapper = () => {

    return(
        <div className="faqWrapper">
            <div className="faqHeader">
                <h1>FAQ</h1>
            </div>

            <div className="faqContent">
                <div>
                    <p className="faqDescription">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    </p>
                </div>

                <AccordionWrapper />
            </div>
        </div>
    )
}

export default FAQWrapper;