import ProjectType from "../prop-types/ProjectType";

export default function Project({ project }) {
  return (
    <>
      <li>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.name} />
        <a href={project.url}>{project.url}</a>
      </li>
      <style jsx="true">
        {`
          #project li {
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 1rem;
          }
          #project p {
            text-align: center;
          }
          #project img {
            width: 100%;
            height: auto;
          }
          #project a {
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
    </>
  );
}

Project.propTypes = {
  project: ProjectType.isRequired,
};
