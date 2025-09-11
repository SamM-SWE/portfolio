import Icons from "./Icons"


export default function ProjectCard(info) {
    return (
        <div className="project-card">
            <img src={info.img} className="project-card-img" />
            <span className="project-card-title">{info.title}</span>
            <span className="project-card-desc">{info.desc}</span>

            <div className="project-card-icons">

            </div>

            <div className="project-card-buttons">
                <a className="view-project-btn" target="_blank" href={info.projectLink}>View Project</a>
                {info.git === "true" && <a target="_blank" className="view-git-btn" href={info.gitLink}>Github</a>}
            </div>
        </div>
    )
}