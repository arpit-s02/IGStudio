import { useState } from "react";
import SuccessRateCard from "../SuccessRateCard/SuccessRateCard";
import "./SuccessRateWrapper.css"

const SuccessRateWrapper = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    const successRateData = [
        {
            id: 1,
            successRate: 98,
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        },
        {
            id: 2,
            successRate: 100,
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        },
        {
            id: 3,
            successRate: 100,
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
        }
    ]

    const handleChange = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="successRateWrapper">
            <h1>Why Choose us?</h1>

            <div className="cardsWrapper">
                {successRateData.map((item, index) => {
                    return(
                        <SuccessRateCard 
                            key={item.id}
                            successRate={item.successRate}
                            content={item.content}
                            isActive={activeIndex === index ? true : false}
                            handleChange={() => handleChange(index)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SuccessRateWrapper;