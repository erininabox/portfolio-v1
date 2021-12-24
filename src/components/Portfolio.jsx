import { Component } from "react";
import Bookward from "../img/portfolio/Bookward.png";
import Wayfarer from "../img/portfolio/Wayfarer.png";
import Engayged from "../img/portfolio/Engayged.png";
import GigaCat from "../img/portfolio/Giga-Cat.png";
import Fireside from "../img/portfolio/Fireside.png";
import "../styles/portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="component">
        <div className="portfolio-item">
          <div className="img-container">
            <img src={Fireside} className="portfolio-img" alt="Fireside screenshot"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Fireside</h3>
            <p>First place winner & People's Choice winner of the November 2021 General Assembly Accessibility hackathon. Accessible friendship-building app to decrease social isolation in seniors during the holidays.</p>
            <p>MongoDB, Express.js, React, Node.js, SASS, Mongoose</p>
            <a href="https://fireside-hackathon.herokuapp.com/" target="_blank" rel="noreferrer" className="portfolio-link">Demo</a>
            <a href="https://github.com/erininabox/Fireside" target="_blank" rel="noreferrer" className="portfolio-link">Gitub Repo</a>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={Bookward} className="portfolio-img" alt="Bookward screenshot"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Bookward</h3>
            <p>Book management app for K-12 Libraries</p>
            <p>MongoDB, Express.js, React, Node.js, Mongoose</p>
            <a href="https://github.com/erininabox/final-project" target="_blank" rel="noreferrer" className="portfolio-link">Readme</a>
            <a href="https://github.com/erininabox/bookward-server" target="_blank" rel="noreferrer" className="portfolio-link">Gitub Server Repo</a>
            <a href="https://github.com/erininabox/bookward-client" target="_blank" rel="noreferrer" className="portfolio-link">Gitub Client Repo</a>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={Wayfarer} className="portfolio-img" alt="Wayfarer screenshot"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Wayfarer</h3>
            <p>Client-directed travel blog</p>
            <p>
              CSS (Flexbox & Grid), Bootstrap, MERN stack: MongoDB, Express.js,
              React, Node.js
            </p>
            <a href="https://adoring-chandrasekhar-bd4410.netlify.app/" target="_blank" rel="noreferrer" className="portfolio-link">Demo</a>
            <a href="https://github.com/erininabox/TravelBlogServer/tree/erinserver" target="_blank" rel="noreferrer" className="portfolio-link">Gitub Server Repo</a>
            <a href="https://github.com/erininabox/TravelBlogClient/tree/erinclient" target="_blank" rel="noreferrer" className="portfolio-link">Github Clint Repo</a>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={Engayged} className="portfolio-img" alt="Engayged Screenshot"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Engayged</h3>
            <p>Responsive wedding-planning web app</p>
            <p>
              JavaScript, Express.js, EJS, Node.js, MongoDB, Mongoose, Bootstrap
            </p>
            <a href="https://weddapp.herokuapp.com/" target="_blank" rel="noreferrer" className="portfolio-link">Demo</a>
            <a href="https://github.com/erininabox/weddingapp" target="_blank" rel="noreferrer" className="portfolio-link">Github Repo</a>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={GigaCat} className="portfolio-img" alt="Giga-Cat Screenshot"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Giga-Cat</h3>
            <p>Responsive browser game</p>
            <p>JavaScript, HTML, CSS (Flexbox & Grid)</p>
            <a href="https://github.com/erininabox/Project-0-Tamagatchi" target="_blank" rel="noreferrer" className="portfolio-link">Github Repo</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
