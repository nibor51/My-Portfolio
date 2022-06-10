export default function Contact() {
  return (
    <>
      <section id="contact">
        <h1>Contact</h1>
        <form action="/" method="GET">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
      <style jsx>{`
        #contact {
          padding: 1rem;
        }
        #contact h1 {
          text-align: center;
        }
        #contact form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 1rem;
        }
        #contact label {
          margin: 1rem;
        }
        #contact input {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 1rem;
        }
        #contact textarea {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 1rem;
        }
        #contact button {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 1rem;
        }
      `}</style>
    </>
  );
}
