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
            <span className="degree-text">
              <span className="degree-title">
                Software Engineering Immersive
              </span>
              <span className="degree-school-location">
                General Assembly | San Francisco
              </span>
            </span>
          </p>
          <p className="degree">
            <span className="degree-year">12/2010</span>
            <span className="degree-text">
              <span className="degree-title">MA Linguistics</span>
              <span className="degree-school-location">
                CSUN | Northridge, CA
              </span>
            </span>
          </p>
          <p className="degree">
            <span className="degree-year">6/2004</span>
            <span className="degree-text">
              <span className="degree-title">BA Natural Sciences</span>
              <span className="degree-school-location">
                Evergreen State College | Olympia
              </span>
            </span>
          </p>
        </div>

        <div className="resume-section">
          <h2 className="emphasis-text resume-section">
            Awards & Accolades
          </h2>
          <p className="degree">
            <span className="degree-year">11/2021</span>
            <span className="degree-text">
              <span className="degree-title">First Place & People's Choice Award for Fireside Team</span>
              <span className="degree-school-location">
                General Assembly Hackathon | Theme: Accessibility, the Elderly, and the Holidays
              </span>
            </span>
          </p>
        </div>

        <div className="resume-section">
          <h2 className="emphasis-text resume-section">
            Prior Professional History
          </h2>
          <p className="job">
            <span className="job-years">10/2019 - 5/2021</span>
            <span className="job-text">
              <span className="job-title">Case Manager</span>
              <span className="job-company-location">
                PRC Baker Places, San Francisco, CA
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">8/2016 - 10/2019</span>
            <span className="job-text">
              <span className="job-title">Residential Treatment Counselor</span>
              <span className="job-company-location">
                Progress Foundation, San Francisco, CA
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">5/2015 - 7/2016 </span>
            <span className="job-text">
              <span className="job-title">Sitter/Nanny </span>
              <span className="job-company-location">
                Self-employed, San Francisco Bay Area, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">8/2014 - 12/2014 </span>
            <span className="job-text">
              <span className="job-title">Middle School English Teacher </span>
              <span className="job-company-location">
                San Francisco Unified School District, San Francisco, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">7/2013 - 8/2014 </span>
            <span className="job-text">
              <span className="job-title">High School English Teacher </span>
              <span className="job-company-location">
                California Virtual Academies, Los Angeles County, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">4/2013 - 6/2013 </span>
            <span className="job-text">
              <span className="job-title">
                Substitute Teacher, long-term placement
              </span>
              <span className="job-company-location">
                Moorpark Unified School District, Moorpark, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">11/2012 - 4/2013 </span>
            <span className="job-text">
              <span className="job-title">
                Middle School Intervention Specialist{" "}
              </span>
              <span className="job-company-location">
                Moorpark Unified School District, Moorpark, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">
              5/2012 - 9/2012 & 5/2011 - 9/2011{" "}
            </span>
            <span className="job-text">
              <span className="job-title">Administrative Assistant </span>
              <span className="job-company-location">
                California Lutheran University - Graduate School of Education,
                Thousand Oaks, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">1/2011 - 5/2011 </span>
            <span className="job-text">
              <span className="job-title">Graduate Assistant </span>
              <span className="job-company-location">
                California Lutheran University - Graduate School of Education,
                Thousand Oaks, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">9/2006 - 2/2008</span>
            <span className="job-text">
              <span className="job-title">Receptionist </span>
              <span className="job-company-location">
                Emperor's College of Traditional Oriental Medicine, Santa
                Monica, CA{" "}
              </span>
            </span>
          </p>
          <p className="job">
            <span className="job-years">8/2005 - 7/2006 </span>
            <span className="job-text">
              <span className="job-title">
                Technical Team Liaison & Client Support Representative{" "}
              </span>
              <span className="job-company-location">
                Washington State University - Energy Extension Program, Olympia,
                WA{" "}
              </span>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
