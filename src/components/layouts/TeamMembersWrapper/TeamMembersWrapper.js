import { useState } from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./TeamMembersWrapper.css"

const TeamMembersWrapper = ({membersdata}) => {

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="teamMembersWrapper">
            {
                membersdata.map((item, index) => {
                    return(
                        <TeamMember
                            key={item.id}
                            name = {item.name}
                            cases = {item.cases}
                            image={item.image}
                            selectMember = {() => setActiveIndex(index)}
                            isActive = {activeIndex === index ? true : false}
                        />
                    )
                })
            }
        </div>
    )
}

export default TeamMembersWrapper;