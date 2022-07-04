import ProjectType from "../prop-types/ProjectType";

export default function Project({ project }) {
  return (
    <li key={project.name}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} />
      <a href={project.url}>{project.url}</a>
    </li>
  );
}

Project.propTypes = {
  project: ProjectType.isRequired,
};
