import { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="component home">
                <h2 className="emphasis-text">Hi! I'm Erin,</h2> 
                <p>I am a well-rounded, non-traditional <span className="emphasis-text">full-stack software developer</span> who believes in using clean, maintainable code to create ethical, accessible software products. With 10 years experience in <span className="emphasis-text">public mental health</span> and <span className="emphasis-text">education</span>, I bring to the table a passion for making communications accessible, and <span className="emphasis-text">cultivating exceptional teams</span> that focus on creative problem-solving, with an eye toward the bigger picture.
                </p>
                <h2 className="emphasis-text">Highlighted Skills</h2>
                <div className="highlighted-skills">
                    <span className="skill-hp">React</span>
                    <span className="skill-hp">JavaScript</span>
                    <span className="skill-hp">HTML </span>
                    <span className="skill-hp">CSS </span>
                    <span className="skill-hp">Flexbox</span>
                    <span className="skill-hp">Grid</span>
                    <span className="skill-hp">WordPress</span>
                    <span className="skill-hp">MongoDB</span>
                    <span className="skill-hp">Express.js</span>
                    <span className="skill-hp">SQL</span>
                    <span className="skill-hp">PostgreSQL</span>
                    <span className="skill-hp">Linux</span>
                    <span className="skill-hp">Crisis management</span>
                    <span className="skill-hp">Team building</span>
                </div>
            </div>
        
        )

    }
}




export default Home;