import Accordion from "../Accordion/Accordion";
import "./AccordionWrapper.css"

const AccordionWrapper = () => {

    const faqData = [
        {
            id: 1,
            question: 'Do I need a personal injury report?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        },
        {
            id: 2,
            question: 'How much is my case worth?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        },
        {
            id: 3,
            question: 'What should I do right after car accident',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        },
        {
            id: 4,
            question: 'How much is my case worth?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        }
    ]

    return (
        <div className="accordionWrapper">
            {
                faqData.map((item) => {
                    return(
                        <Accordion 
                            key = {item.id}
                            question = {item.question}
                            answer = {item.answer}
                        />
                    )
                })
            }
        </div>
    )
}

export default AccordionWrapper;