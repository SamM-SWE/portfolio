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
                <button className="view-project-btn">View Project</button>
                {info.git === "true" && <button className="view-git-btn">Github</button>}
            </div>
        </div>
    )
}