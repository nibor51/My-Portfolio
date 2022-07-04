import React from "react";
import projectList from "../data/projectList.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <section id="project">
        <h1>Projects</h1>
        <p>This is the project page.</p>
        <ul>
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </section>
      <style jsx="true">{`
        #project {
          padding: 1rem;
        }
        #project h1 {
          text-align: center;
        }
        #project p {
          text-align: center;
        }
        #project ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0;
        }
      `}</style>
    </>
  );
}
