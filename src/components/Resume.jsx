import { Component } from "react";
import "../styles/resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume-component">
        <div className="resume-section">
          <h2 className="emphasis-text">Skills</h2>
          <div className="skill-cards">
            <div className="skill-section">
              <h3 className="skill-title">Front End</h3>
              <p className="skill">React</p>
              <p className="skill">JavaScript</p>
              <p className="skill">HTML </p>
              <p className="skill">CSS </p>
              <p className="skill">Bootstrap</p>
              <p className="skill">Materialize</p>
              <p className="skill">Flexbox</p>
              <p className="skill">Grid</p>
              <p className="skill">WordPress</p>
            </div>

            <div className="skill-section">
              <h3 className="skill-title">Back End</h3>
              <p className="skill">MongoDB</p>
              <p className="skill">PHP</p>
              <p className="skill">REST API’s</p>
              <p className="skill">Node.js</p>
              <p className="skill">Express.js</p>
              <p className="skill">SQL</p>
              <p className="skill">PostgreSQL</p>
              <p className="skill">Sequelize</p>
            </div>

            <div className="skill-section">
              <h3 className="skill-title">Tools & Methodologies</h3>
              <p className="skill">MVC</p>
              <p className="skill">SPA architecture</p>
              <p className="skill">Command Line Interface</p>
              <p className="skill">Responsive Web Design</p>
              <p className="skill">Version control (Git/Github)</p>
              <p className="skill">VSCode</p>
              <p className="skill">Heroku</p>
              <p className="skill">Slack</p>
              <p className="skill">Trello</p>
              <p className="skill">Linux</p>
            </div>

            <div className="skill-section">
              <h3 className="skill-title">Soft Skills</h3>
              <p className="skill">Crisis management</p>
              <p className="skill">Team building</p>
              <p className="skill">Communication</p>
              <p className="skill">Creative problem solving</p>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="emphasis-text">Education</h2>
          <p className="degree">
            <span className="degree-year">9/2021</span>
            <span className="degree-name">
              Software Engineering Immersive
              <br />
              General Assembly | San Francisco
            </span>
          </p>
          <p className="degree">
            <span className="degree-year">12/2010</span>
            <span className="degree-name">
              MA Linguistics
              <br />
              CSUN | Northridge, CA
            </span>
          </p>
          <p className="degree">
            <span className="degree-year">6/2004</span>
            <span className="degree-name">
              BA Natural Sciences
              <br />
              Evergreen State College | Olympia
            </span>
          </p>
        </div>

        <div className="resume-section">
          <h2 className="emphasis-text resume-section">Professional History</h2>
          <p className="job">
              <span className="job-years">10/2019 - 5/2021</span>
              <span className="job-text">
                <span className="job-title">Case Manager</span><br />
                <span className="job-company-location">PRC Baker Places, San Francisco, CA</span>
              </span>
          </p>
          <p className="job">
              <span className="job-years">8/2016 - 10/2019</span>
              <span className="job-text">
                <span className="job-title">Residential Treatment Counselor</span><br />
                <span className="job-company-location">Progress Foundation, San Francisco, CA</span>
              </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
