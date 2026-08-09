import "./Skills.css";
import SkillCard from "./SkillCard";
function Skills(){
    console.log("Skills component rendered");
    const skills = [
  {
    title: "React",
    description: "Frontend Development",
  },
  {
    title: "Node.js",
    description: "Backend Development",
  },
  {
    title: "MongoDB",
    description: "Database",
  },
  {
    title:"Java",
    description:"Programming Language"
  }
];
    return(
        <>
        <section className="skills" id="skills">
          <h1 className="section-title">My Skills</h1>
          <div className="skills-container">
            {skills.map((skill, index) => {
  console.log("Current skill:", skill);

  return (
    <SkillCard
      key={index}
      title={skill.title}
      description={skill.description}
    />
  );
})}
</div>
         
        </section>
   
        </>

    );
}
export default Skills;