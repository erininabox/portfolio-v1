import { Link } from 'react-router-dom';
import '../styles/footer.css';
import aticon from '../img/icons/at-sign.svg';
import linkedinicon from '../img/icons/linkedin.svg';
import githubicon from '../img/icons/github.svg';
import resumeicon from '../img/icons/file-text.svg';

function Footer() {
    return (
        <footer className="footer">
            <span className="footer-list">
                <Link to={{ pathname: "https://www.linkedin.com/in/erininabox"}} className="footer-list-items"><img src={linkedinicon} className="icon" alt="Linked In" /></Link>
                <Link to={{ pathname: "https://github.com/erininabox" }}className="footer-list-items"><img src={githubicon} className="icon" alt="Github" /></Link>
                <Link to={{ pathname: "mailto:erinhalden@erininabox.com"}} className="footer-list-items"><img src={aticon} className="icon" alt="Email me" /></Link>
                <a href='../files/Halden-Erin.pdf' className="footer-list-items" download><img src={resumeicon} className="icon" alt="Resume file" /></a>
            </span>
        </footer>
    )
}

export default Footer;