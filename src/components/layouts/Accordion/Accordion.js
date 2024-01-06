import { useState } from "react";
import "./Accordion.css";

const Accordion = ({question, answer}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion">
      <div 
        className="accordionHeader"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{question}</h3>
        <button className={isOpen ? "faqIcon invisible" : "faqIcon"}>+</button>

      </div>

      <div>
        <p className={isOpen ? "content show" : "content hide"}>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
