import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


function SkillCard({title,description}){
    let icon;
    if (title === "React") {
    icon = <FaReact />;
}
else if (title === "Node.js") {
    icon = <FaNodeJs />;
}
else if (title === "MongoDB") {
    icon = <SiMongodb />;
}
else if (title === "Java") {
    icon = <FaJava />;
}
    return(
        <div className="skill-card">
            {icon}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    );
}
export default SkillCard;