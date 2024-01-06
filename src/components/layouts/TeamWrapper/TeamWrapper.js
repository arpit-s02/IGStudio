import "./TeamWrapper.css"
import DanialImage from "../../../assets/danial.png"
import SanfoleImage from "../../../assets/sanfole.png"
import CesforilaImage from "../../../assets/cesforila.png"
import ColleenImage from "../../../assets/colleen.png"
import HaldoneImage from "../../../assets/haldone.png"
import NikImage from "../../../assets/nik.png"
import TeamMembersWrapper from "../TeamMembersWrapper/TeamMembersWrapper"

const TeamWrapper = () => {

    const membersdata = [
        {
            id: 1,
            name: 'Danial Def',
            cases: 301,
            image: DanialImage
        },
        {
            id: 2,
            name: 'Sanfole',
            cases: 850,
            image: SanfoleImage
        },
        {
            id: 3,
            name: 'Cesforila',
            cases: 470,
            image: CesforilaImage
        },
        {
            id: 4,
            name: 'Colleen',
            cases: 180,
            image: ColleenImage
        },
        {
            id: 5,
            name: 'Haldone',
            cases: 212,
            image: HaldoneImage
        },
        {
            id: 6,
            name: 'Nik Jeo',
            cases: 350,
            image: NikImage
        }
    ]
    
    return(
        <div className="teamWrapper">
            <h1 className="teamHeading">Our Team</h1>

            <TeamMembersWrapper 
                membersdata={membersdata}
            />
        </div>
    )
}

export default TeamWrapper;