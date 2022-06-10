const projectList = [
  {
    name: "Project 1",
    description: "This is a project description",
    image: "https://source.unsplash.com/random/400x200",
    url: "https://www.google.com",
  },
  {
    name: "Project 2",
    description: "This is a project description",
    image: "https://source.unsplash.com/random/400x200",
    url: "https://www.google.com",
  },
];

export default function Projects() {
  return (
    <>
      <section id="project">
        <h1>Projects</h1>
        <p>This is the project page.</p>
        <ul>
          {projectList.map((project) => (
            <li key={project.name}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.name} />
              <a href={project.url}>{project.url}</a>
            </li>
          ))}
        </ul>
      </section>
      <style jsx>{`
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
