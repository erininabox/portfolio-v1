import aticon from "../img/icons/at-sign.svg";
import linkedinicon from "../img/icons/linkedin.svg";
import githubicon from "../img/icons/github.svg";
import resumeicon from "../img/icons/file-text.svg";
import phoneicon from "../img/icons/phone.svg";

function Contact() {
  return (
    <div className="contact-component">
      <h2 className="emphasis-text">Reach out to me</h2>
      <a
        href="https://www.linkedin.com/in/erininabox"
        className="contact-items"
        target="_blank" rel="noreferrer"
      >
        <img src={linkedinicon} className="contact-icon" alt="Linked In" />
        <span className="contact-text">LinkedIn</span>
      </a>
      <a
        href="https://github.com/erininabox"
        className="contact-items"
        target="_blank" rel="noreferrer"
      >
        <img src={githubicon} className="contact-icon" alt="Github" />
        <span className="contact-text">Github</span>
      </a>
      <a
        href="mailto:erinhalden@erininabox.com"
        className="contact-items"
        target="_blank" rel="noreferrer"
      >
        <img src={aticon} className="contact-icon" alt="Email me" />
        <span className="contact-text">Email Me: erinhalden@erininabox.com</span>
      </a>
      <a href="https://drive.google.com/file/d/1Z3Cp8-DR5SOS_RPtV5fhwO5PnWYVsllA/view?usp=sharing" className="contact-items" target="_blank" rel="noreferrer">
        <img src={resumeicon} className="contact-icon" alt="Resume file" />
        <span className="contact-text">Download my resume</span>
      </a>
      <a href="tel:+14158234794" className="contact-items" target="_blank" rel="noreferrer">
        <img src={phoneicon} className="contact-icon" alt="Phone number" />
        <span className="contact-text">Call or text</span>
      </a>
    </div>
  );
}

export default Contact;
