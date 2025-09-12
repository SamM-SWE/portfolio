import Arc3 from "../components/Arc3"
import ProjectCard from "../components/ProjectCard"
import PortfolioIMG from "../assets/Portfolio.png"
import UlicafIMG from "../assets/Ulicaf.png"

export default function Projects() {
    return (
        <section id="projects" className="projects-page">
            <div className="black-bar5"></div>
            <span className="projects-title">Projects</span>
            <div className="projects-div">
                <ProjectCard title="Portfolio" img={PortfolioIMG} git="true" projectLink="https://sammonneh.vercel.app" gitLink="https://github.com/SamM-SWE/portfolio" desc="Personal portfolio, regarding information about myself and also showcasing my projects."></ProjectCard>
                <ProjectCard title="ULICAF" img={UlicafIMG} projectLink="https://www.ulicaf.org" desc="Non profit orginazation website showcasing, updates, newsletters, and donations. Also showcases an Admin panel."></ProjectCard>
            </div>
            
            <div className="black-bar4"></div>
            <Arc3/>

        </section>
    )
}