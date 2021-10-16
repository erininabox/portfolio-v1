import { Link } from "react-router-dom";
import "../styles/header.css";
import aticon from "../img/icons/at-sign.svg";
import linkedinicon from "../img/icons/linkedin.svg";
import githubicon from "../img/icons/github.svg";
import resumeicon from "../img/icons/file-text.svg";

function Header() {
  return (
    <nav className="header">
      <span className="title-name">
        <Link to="/">Erin Halden</Link>
      </span>

      <div className="list-container">
        <span className="link-list">
          <Link className="link-list-items" to="./portfolio">
            Portfolio
          </Link>
          <Link className="link-list-items" to="./resume">
            Experience
          </Link>
        </span>

        
      </div>
    </nav>
  );
}

export default Header;
