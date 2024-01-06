import {ReactComponent as LeftArrow} from "../../../assets/leftArrow.svg"
import {ReactComponent as RightArrow} from "../../../assets/rightArrow.svg"
import "./CarouselControl.css";

const CarouselControl = ({translateIndex, setTranslateIndex, dataLength}) => {

    const changeTranslateIndex = (newIndex) => {
        if(newIndex < 0){
            setTranslateIndex(0);
            return;
        }

        else if(newIndex >= dataLength){
            setTranslateIndex(dataLength - 1);
            return;
        }

        setTranslateIndex(newIndex);
    }

    return (
        <div className="carouselControl">
            <button 
                onClick={() => changeTranslateIndex(translateIndex - 1)} 
                className="leftButton"
            >
                <LeftArrow />
            </button>

            <button 
                onClick={() => changeTranslateIndex(translateIndex + 1)} 
                className="rightButton"
            >
                <RightArrow />
            </button>
        </div>
    )
}

export default CarouselControl;