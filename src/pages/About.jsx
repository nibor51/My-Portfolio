export default function About() {
  return (
    <>
      <section id="about">
        <h1>About</h1>
        <p>This is the about page.</p>
      </section>
      <style jsx>{`
        #about {
          padding: 1rem;
        }
        #about h1 {
          text-align: center;
        }
        #about p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
