import ClientReviewCard from "../ClientReviewCard/ClientReviewCard";

import JaneImage from "../../../assets/jane.png"
import DevonImage from "../../../assets/devon.png"
import RobertImage from "../../../assets/robert.png"

import "./ClientReviewWrapper.css"
import { useState } from "react";

const ClientReviewWrapper = () => {

    const [translateValue, setTranslateValue] = useState(0)
    const [activeIndex, setActiveIndex] = useState(-1)

    const reviewData = [
        {
            id: 1,
            name: 'Jane Cooper',
            image: JaneImage,
            designation: 'Ceo of Hunt',
            review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 2,
            name: 'Devon Lane',
            image: DevonImage,
            designation: 'Ceo of Hunt',
            review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 3,
            name: 'Robert Fox',
            image: RobertImage,
            designation: 'Ceo of Hunt',
            review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        }, 
        {
            id: 4,
            name: 'Ryan Harris',
            image: 'https://www.shutterstock.com/image-photo/young-business-man-wearing-formal-260nw-1811281555.jpg',
            designation: 'Ceo of Hunt',
            review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 5,
            name: 'Steve David',
            image: 'https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=ais',
            designation: 'Ceo of Hunt',
            review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 6,
            name: 'Emma Rhodes',
            image: 'https://www.shutterstock.com/shutterstock/photos/2139568159/display_1500/stock-photo-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-2139568159.jpg',
            designation: 'Ceo of Hunt',
            review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        }
    ]


    const navigateLeft = () => {
        const translateWidth = 389
        const maxTranslateValue = 0

        if(translateValue >= maxTranslateValue){
            return
        }

        setTranslateValue(translateValue + translateWidth)
    }

    const navigateRight = () => {
        const totalCards = reviewData.length
        const translateWidth = 389
        const minTranslateValue = ((totalCards - 1) * translateWidth) * -1

        if(translateValue <= minTranslateValue){
            return
        }

        setTranslateValue(translateValue - translateWidth)
    }

    return(
        <div className="clientReviewWrapper">
            <div className = "clientReviewHeader">
                <div className="clientReviewHeading">
                    What says our happy Clients
                </div>

                <div>
                    <button onClick={navigateLeft}>Left</button>
                    <button onClick={navigateRight}>right</button>
                </div>

            </div>

            <div style = {{width: '100%', overflow:'hidden'}}>
                <div 
                    className="reviewCardsContainer"
                    style={{transform: `translateX(${translateValue}px)`}}
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
        </div>
    )
}

export default ClientReviewWrapper;