import React from "react";

const App = () => {
  const portfolioData = {
    name: "Pabbisetty Sri Mahalakshmi Sai Sreeja",
    reg:"21BCE7166",
    place: "Vijayawada,AP",
    skills: ["Artifical Intelligence", "Frontend development","Java","Python"],
    projects: [
      {
        title: "Robotic fire detection and extinguishing system",
        description: "It uses arduino board and detects the fire and extinguishes it using water"},
      {
        title: "Face detection",
        description: "With the help of raspberry py it detects the human face and gives an alarm if something is suspicious",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1><u>NAME:</u>{portfolioData.name}</h1>
          <h2><u>REGISTRATION NUMBER:</u> {portfolioData.reg}</h2>
          <h2><u>PLACE:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>ABOUT ME</u></h3>
            <p>This is Sreeja Pabbisetty, studying 3rd year at VIT-AP, in the stream of computer science engineering, CORE. I'm excited about the ever-evolving world of technology and the endless opportunities it offers. My fascination with the field began with an insatiable curiosity for solving complex problems, which has since evolved into a deep love for software development, machine learning, and data analysis. In my educational journey, I've had the privilege of diving into a diverse range of subjects, from algorithm design to web development, which has further fueled my enthusiasm. </p>
          </div>
          <div className="skills">
            <h3><u>SKILLS</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>PROJECTS</u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;