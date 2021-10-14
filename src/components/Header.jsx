import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <nav className="header">
      <span className="title-name"><Link to="/">Erin Halden</Link></span>
      <span className="link-list">
        <Link className="link-list-items" to="./portfolio">
          Portfolio
        </Link>
        <Link className="link-list-items" to="./resume">Experience</Link>
      </span>
    </nav>
  );
}

export default Header;
