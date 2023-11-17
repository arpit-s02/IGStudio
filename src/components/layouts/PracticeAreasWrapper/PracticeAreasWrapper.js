import PracticeArea from "../PracticeArea/PracticeArea";
import BusinessLawImage1 from "../../../assets/businessLaw1.png";
import BusinessLawImage2 from "../../../assets/businessLaw2.png";
import LandlordDisputeImage from "../../../assets/landlordDisputes.png";
import PartneshipLawImage from "../../../assets/partnershipLaw.png"
import RealEstateImage from "../../../assets/realEstate.png"
import ElderAbuseImage from "../../../assets/elderAbuse.png"
import "./PracticeAreasWrapper.css"

const PracticeAreasWrapper = () => {

    const practiceAreasData = [
        {
            id: 1,
            text: "BUSINESS LAW",
            image: BusinessLawImage1,
            wide: true
        },
        {
            id: 2,
            text: "Partnership LAW",
            image: PartneshipLawImage,
            wide: false
        },
        {
            id: 3,
            text: "REAL ESTATE LAW",
            image: RealEstateImage,
            wide: false
        },
        {
            id: 4,
            text: "BUSINESS LAW",
            image: BusinessLawImage2,
            wide: true
        },
        {
            id: 5,
            text: "LANDLORD DISPUTES",
            image: LandlordDisputeImage,
            wide: true
        },
        {
            id: 6,
            text: "ELDER ABUSE",
            image: ElderAbuseImage,
            wide: false
        },
    ]

  return (
    <div className="practiceAreasWrapper">
        <h1>Area of Practices</h1>

        <div className="practiceAreas">

            {practiceAreasData.map((item) => {
                return(
                    <PracticeArea
                        key={item.id}
                        text = {item.text}
                        image={item.image}
                        wide={item.wide}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default PracticeAreasWrapper;