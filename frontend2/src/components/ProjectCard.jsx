import "./ProjectCard.css";
function ProjectCard({title,description,image,github,live}){

    return(
        <div className="project-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="buttons">
                <a href={github} target="_blank" rel="noreferrer">GitHub

                </a>
                { live ?(
                <a href={live} target="_blank" rel="noreferrer">Live Demo

                </a>
                ):(
                    <p>Coming Soon</p>
                )
            }

            </div>

        </div>
    )
}
export default ProjectCard;