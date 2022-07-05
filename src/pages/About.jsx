import profilePic from "../assets/images/profilePic.jpg";

export default function About() {
  return (
    <>
      <section id="about">
        <h1>About</h1>
        <div className="about-container">
          <img src={profilePic} alt="" />
          <div className="about-profile">
            <p>
              Passionné d'informatique depuis de nombreuses années, j'ai
              commencé en réalisent quelques sites web grace au site du zéro
              (désormais Open Class Room) lorsque j'était au colllège. En
              terminal j'ai suvi un cursus comportent des cours d'éléctronique
              et d emécanique théorique qui m'on permit de réaliser des
              programmes en Grafcet et de continuer à develloper ma logique. ces
              suivi une période post-lycée ou les gain liées au missions
              intérimaire m'attiré plus que le restes et donc une multitude
              d'expérience se sont donc offertes à moi. Sans emploi lors de la
              période COVID, j'ai pu me recentré sur moi, et c'est là que j'ai
              décidé de faire se qui depuis de nombreuses années est une passion
              : un métier liée à l'informatique. Etant en contact avec des
              personnes du milieu, j'ai pu avoir des avis sur plusieurs métier
              du domaine. Et c'est sur le développement que j'ai décidé de
              m'orienter. En effet se côté challengent, créatif, et en contante
              evolution m'a attiré. C'est pourquoi j'ai décidé de suivre une
              formation en développement web.
            </p>
            <p>
              C'est à la Wild Code School que j'ai donc réalisé une formation de
              cinq mois, formation sur le langage PHP et le framework Symfony.
              C'est lors de cette formation que ma reflexion sur le métier de
              formateur qui me troté en tête depuis quelques temps deja ses
              affiné, grace au poste de Teaching Assitant qui se liberera à la
              fin de ma formation, poste qui je reprendrait pour mon stage de
              fin de formation. Ce stage se déroulent sur une formation React /
              Express j'ai dû apprendre ces techno en auto-didacte afin d'être
              en avance sur mes èleves pour leur enseigner, j'ai donc dispensé
              des cours, organisé et animé des ateliers de découverte et de
              support, et réalisé des entretiens techniques afin de recruter les
              élèves qui feront leurs rentré sur la prochaine sessions de
              formation.
            </p>
            <p>
              Actuellement je suis à la recherche d'un entreprise permettent de
              poursuivre en Septembre sur une alternance dévellopeur web mobile
              (à la Wild Code School encore). Vous vous demandez sans doute,
              "Pourquoi ne pas entreprendre la recherche d'un CDI directement
              ?", je pourrait sans aucun doute apprendre les modules qui y sont
              proposé de moi même, alors peut-être que lle syndrome de
              l'imposteur fais que je suis rassuré par cette encadrement, cela y
              est sans doute pour quelques choses, mais je suis plus d'avis que
              je n'est pas envie de terminé l'aventure WIld Code School après
              seulement dix mois, mais aussi que les modules prevues
              (Typescript, React Native, Dockers, Mongo,.. ) sont des technos
              qui me permettront de continuer à progresser et d'aquérir des
              bases dans des métiers satellite au mieux et e permettrons
              d'améliorer la communication au sein de mes futur groupe de
              travail quel que soit le project.
            </p>
          </div>
        </div>
      </section>
      <style jsx="true">{`
        #about {
          padding: 2rem;
        }
        #about h1 {
          margin-bottom: 2rem;
        }
        #about img {
          width: 30%;
          height: auto;
          border-radius: 50%;
          margin: 1rem;
          float: right;
        }
        #about .about-profile {
          text-align: left;
        }
        #about .about-profile p {
          margin-bottom: 2rem;
        }
        #about .about-profile p::first-letter {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffc107;
          margin-left: 0.5rem;
        }
      `}</style>
    </>
  );
}
