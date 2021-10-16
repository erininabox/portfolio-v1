import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <nav className="header">
      <span className="title-name">
        <Link to="/">Erin Halden</Link>
        <span className="profession-title">
          Full stack web developer
        </span>
      </span>

      <div className="list-container">
        <span className="link-list">
          <Link className="link-list-items" to="./portfolio">
            Portfolio
          </Link>
          <Link className="link-list-items" to="./resume">
            Experience
          </Link>
          <Link className="link-list-items" to="./contact">Contact Me</Link>
        </span>


        
      </div>
    </nav>
  );
}

export default Header;
