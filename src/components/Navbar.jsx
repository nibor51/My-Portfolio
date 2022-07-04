import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
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
    </>
  );
}
