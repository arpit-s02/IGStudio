import ClientReviewCard from "../ClientReviewCard/ClientReviewCard"
import {useState} from "react"
import "./Carousel.css"

const Carousel = ({reviewData, translateIndex, translateValue}) => {

    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div style = {{width: '100%', overflow:'hidden'}}>
            <div 
                className="reviewCardsContainer"
                style={{transform: `translateX(-${translateIndex * translateValue}px)`}}
            >
                {
                    reviewData.map((item, index) => {
                        return (
                            <ClientReviewCard 
                                key = {item.id}
                                name = {item.name}
                                image = {item.image}
                                designation={item.designation}
                                review={item.review}
                                isActive = {index === activeIndex ? true : false}
                                handleChange = {() => setActiveIndex(index)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;