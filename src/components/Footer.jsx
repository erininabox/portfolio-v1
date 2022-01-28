import "../styles/footer.css";
import aticon from "../img/icons/at-sign.svg";
import linkedinicon from "../img/icons/linkedin.svg";
import githubicon from "../img/icons/github.svg";
import resumeicon from "../img/icons/file-text.svg";
import landingcactus from "../img/landing-cactus.png";
// import {Link} from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <span className="icon-list vertical-menu">
        <a
          href="https://www.linkedin.com/in/erininabox"
          className="link-list-items"
          target="_blank" rel="noreferrer"
        >
          <img src={linkedinicon} className="icon" alt="Linked In" />
        </a>
        <a
          href="https://github.com/erininabox"
          className="link-list-items"
          target="_blank" rel="noreferrer"
        >
          <img src={githubicon} className="icon" alt="Github" />
        </a>
        <a
          href="mailto:erinhalden@erininabox.com"
          className="link-list-items"
          target="_blank" rel="noreferrer"
        >
          <img src={aticon} className="icon" alt="Email me" />
        </a>
        <a href="https://1drv.ms/b/s!AiKEr1mskbPwjcpxrXAt7LWDWFNNxw" className="link-list-items" target="_blank" rel="noreferrer">
          <img src={resumeicon} className="icon" alt="Resume file" />
        </a>
      </span>
      <div className="cactus">
        <img className="cactus-img" src={landingcactus} alt="cactus with orange bloom on top in a terra cotta pot" />
      </div>
    </footer>
  );
}

export default Footer;
