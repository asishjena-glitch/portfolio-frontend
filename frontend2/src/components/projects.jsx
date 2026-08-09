import "./Projects.css";
import ProjectCard from"./ProjectCard";
function Projects(){
    console.log("projects component rendered")
      const projects = [

    {
      title: "Movie Recommendation  System",
      description: "Python based movie recommendation system.",
      image: "https://via.placeholder.com/300",
      github: "https://github.com/asishjena-glitch/CineVerse-AI",
      live: "#",
    },

    {
      title: "Todo App",
      description: "React Todo Application.",
      image: "https://via.placeholder.com/300",
      github: "https://github.com/asishjena-glitch/todo-app",
      live: "",
    },

    {
      title: "Student Management",
      description: "CRUD Application using MERN.",
      image: "https://via.placeholder.com/300",
      github: "https://github.com/asishjena-glitch/student-management-system",
      live: "#",
    },

  ];

    return(
        <section  className="projects-section" id="projects" >
            <h1 className="section-title"> My projects</h1>
            <div className="projects-container">
                {projects.map((project,index)=>{
                    return(
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    live={project.live}
                    />
                    );
                })}

            </div>

        </section>
        
    );
}
export default Projects;