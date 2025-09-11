
export function SkillCard(info) {
    return (
        <div className="skill-card">
            <span className="years-txt">{info.years}</span>
            <span className="titleinfo-txt">{info.title}</span>
        </div>
    )
}