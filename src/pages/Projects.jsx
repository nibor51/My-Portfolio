const projectList = [
  {
    name: "Reims Quiz",
    description:
      "Répondez à un petit Quiz sur la ville de Reims afin de la découvrir à travers des anecdotes la concernent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum? Blanditiis non sint, rerum quisquam earum iusto? Tempore aspernatur molestiae voluptatum blanditiis, beatae corrupti provident, recusandae iure quia neque rerum?",
    image: "https://source.unsplash.com/random/400x200",
    url: "https://nibor51.github.io/scaling-journey/docs",
  },
  {
    name: "Baker Street Fighter",
    description:
      "Venez à deux sur votre ordinateur pendant votre pause, pour vous battre dans se petit jeu de boxe situer dans l'univers de Sherlock Holmes 8bit ! Site web dynamique réalisé à la Wild Code School.",
    image: "https://source.unsplash.com/random/400x200",
    url: "https://github.com/WildCodeSchool/reims-php-2109-project2-baker-street-fighter",
  },
  {
    name: "Motorbox",
    description:
      "Motorbox est née dans l'esprit de Baptiste jesaispluscomment, le but de cette aplication est de réliaser le suivi d'entretien de votre moto. En effet beaucoup de pièces necessite un entretien constant. Site web dynamique réalisé en partenariat avec une startup incubé chez Innovact",
    image: "https://source.unsplash.com/random/400x200",
    url: "https://github.com/WildCodeSchool/reims-202109-php-project3-motorbox",
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
