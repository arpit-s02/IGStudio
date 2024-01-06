import "./TeamMember.css"

const TeamMember = ({name, image, cases, selectMember, isActive}) => {
    return(
        <div 
            className={isActive ? "teamMember activeMember" : "teamMember"}
            onClick={selectMember}
        >
            <div className="memberImageWrapper">
                <img src = {image} alt = "sanfole" />
            </div>

            <div>
                <h3 className="memberName">{name}</h3>
                <p className="memberCases">{cases} cases</p>
            </div>
        </div>
    )
}

export default TeamMember;