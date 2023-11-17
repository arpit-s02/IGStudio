import "./PracticeArea.css"

const PracticeArea = ({text, image, wide}) => {
  return (
    <div 
        className={wide ? "practiceArea wide" : "practiceArea regular"}
        style={{backgroundImage: `url(${image})`}}
    >
        <span>{text}</span>
    </div>
  )
}

export default PracticeArea;