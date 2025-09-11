import Arc3 from "../components/Arc3"
import ProjectCard from "../components/ProjectCard"
import PlaceHolderImg from "../assets/placeholderimg.png"

export default function Projects() {
    return (
        <section id="projects" className="projects-page">
            <span className="projects-title">Projects</span>
            <div className="projects-div">
                <ProjectCard title="Project 1" img={PlaceHolderImg} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></ProjectCard>
                <ProjectCard title="Project 2" git="true" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></ProjectCard>
                <ProjectCard title="Project 3" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></ProjectCard>
            </div>
            
            <div className="black-bar4"/>
            <Arc3/>

        </section>
    )
}