import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <h1 className="section-title">About Me</h1>

      <div className="about-container">

        <div className="about-left">
          <h2>Full Stack Developer</h2>

          <p>
            I love building modern, responsive and interactive web
            applications using React, Node.js, Express and MongoDB.
            I'm passionate about solving real-world problems through code.
          </p>

          <button>Download Resume</button>
        </div>

        <div className="about-right">

          <div className="info-card">
            <h2>10+</h2>
            <p>Projects</p>
          </div>

          <div className="info-card">
            <h2>MERN</h2>
            <p>Stack</p>
          </div>

          <div className="info-card">
            <h2>Java</h2>
            <p>DSA</p>
          </div>

          <div className="info-card">
            <h2>React</h2>
            <p>Frontend</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;