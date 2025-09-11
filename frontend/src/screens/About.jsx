import Arc from "../components/Arc2.jsx"
import MyImage from "../assets/about-img.png"
import { SkillCard } from "../components/SkillCard.jsx"

function About() {
    return (
        <section id="about" className="about-page">
            <div className="black-bar2"/>

            <span className="aboutimg-container">
                <div className="ellipse">
                    <img src={MyImage} className="about-img" />
                </div>
                
            </span>

            <span className="about-me-title">About me</span>

            <div className="tag-div">
                <span className="purple-tag">2nd Year CS Student</span>
                <span className="blue-tag">Full-Stack Developer</span>
            </div>
            

            <div className="bio-text">I am a Computer Science student with a passion for developing full-stack  applications and solving real world problems. Currently, im focused on expanding my skills and gaining hands-on experience</div>
            
            <div className="skill-card-div">
                <SkillCard years="3+" title="Years Coding"/>
                <SkillCard years="2+" title="Projects"/>
                <SkillCard years="1" title="Intership"/>
            </div>
            <div className="black-bar4"/>
            <Arc/>
            
        </section>
    )
}

export default About