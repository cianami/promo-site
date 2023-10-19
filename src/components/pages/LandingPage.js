import WelcomeSection from "../ui/sections/landing-page/welcome-section/WelcomeSection";
import Technologies from "../ui/sections/landing-page/technologies/Technologies";
import AlreadyLearn from "../ui/sections/landing-page/already-learn/AlreadyLearn";
import MyNumber from "../ui/sections/landing-page/my-number/MyNumber";
import SoftSkills from "../ui/sections/landing-page/soft-skills/SoftSkills";
import WantToLearn from "../ui/sections/landing-page/want-to-learn/WantToLearn";
import CaseStudies from "../ui/sections/landing-page/case-studies/CaseStudies";
import ContactMe from "../ui/sections/landing-page/contact-me/ContactMe";


export default function LandingPage (){
    return(
        <div className="landing-page">
            <WelcomeSection/>
            <Technologies/>
            <AlreadyLearn/>
            <MyNumber/>
            <SoftSkills/>
            <WantToLearn/>
            <CaseStudies/>
            <ContactMe/>
        </div>
    )
}