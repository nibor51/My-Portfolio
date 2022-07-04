import React from "react";
import projects from "../data/projects.json";
import Project from "../components/Project";

export default function Projects() {
  return (
    <>
      <section id="project">
        <h1>Projects</h1>
        <p>This is the project page.</p>
        <ul>
          {projects.map((project) => (
            <Project project={project} />
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
        #project li {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 1rem;
        }
        #project img {
          width: 100%;
          height: auto;
        }
        #project a {
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </>
  );
}
