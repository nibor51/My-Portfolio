import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/work").then((res) => {
      console.warn(res.data);
      setProjectsList(res.data);
    });
  }, []);

  return (
    <>
      <section id="project">
        <h1>Projects</h1>
        <p>This is the project page.</p>
        <ul>
          {projectsList.map((project) => (
            <ProjectCard key={project.title} project={project} />
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
