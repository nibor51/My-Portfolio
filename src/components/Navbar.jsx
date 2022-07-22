import { Link } from "react-router-dom";
import github from "@assets/images/social/github.svg";
import linkedin from "@assets/images/social/linkedin.svg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href="mailto:jonval.robin@gmail.com?subject=Portfolio%20%3A%20Robin%20Jonval">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a href="https://github.com/nibor51" target="_blank" rel="noreferrer">
            <img src={github} alt="" />
          </a>

          <a
            href="https://www.linkedin.com/in/robin-jonval/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </nav>
      <style jsx="true">{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #f5f5f5;
          border-bottom: 1px solid #ccc;
        }
        nav ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none;
          padding: 0;
        }
        nav li {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 1rem;
        }
        nav a {
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </header>
  );
}
