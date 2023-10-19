//import backgroundImage from "../../assets/marketing-img.jpg"
import "./WelcomeSection.css"
import Btn from "../../../common/Button";
import {TypeAnimation} from "react-type-animation";

export default function WelcomeSection(){
    return(
        <div className="welcome-section w-100 ">
            <h1 className="welcome-section-main-text">
               Привет, меня зовут <br/> Арина!
            </h1>
            <p className="typing">
                <TypeAnimation
                    sequence={[
                        'Для друзей я просто Ариша.',
                        1000,
                        '',
                        1000
                    ]}
                    speed={50}
                    style={{ fontSize: '20px' }}
                    repeat={Infinity}
                    className="welcome-section-small-text"
                />
            </p>
            <Btn
                color="white"
                text="ПОЗНАКОМИТЬСЯ"
                className="mt-4 start-btn yellow-btn"
                onClick={()=>document.getElementById("softSkills").scrollIntoView()}
            />
        </div>
    )
}