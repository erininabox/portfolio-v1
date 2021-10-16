import "../styles/footer.css";
import aticon from "../img/icons/at-sign.svg";
import linkedinicon from "../img/icons/linkedin.svg";
import githubicon from "../img/icons/github.svg";
import resumeicon from "../img/icons/file-text.svg";

function Footer() {
  return (
    <footer className="footer">
      <span className="icon-list vertical-menu">
        <a
          href="https://www.linkedin.com/in/erininabox"
          className="link-list-items"
          target="_blank"
        >
          <img src={linkedinicon} className="icon" alt="Linked In" />
        </a>
        <a
          href="https://github.com/erininabox"
          className="link-list-items"
          target="_blank"
        >
          <img src={githubicon} className="icon" alt="Github" />
        </a>
        <a
          href="mailto:erinhalden@erininabox.com"
          className="link-list-items"
          target="_blank"
        >
          <img src={aticon} className="icon" alt="Email me" />
        </a>
        <a href="../files/Halden-Erin.pdf" className="link-list-items" download>
          <img src={resumeicon} className="icon" alt="Resume file" />
        </a>
      </span>
    </footer>
  );
}

export default Footer;
