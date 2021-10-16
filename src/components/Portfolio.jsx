import { Component } from "react";
import Bookward from "../img/portfolio/Bookward.png";
import Wayfarer from "../img/portfolio/Wayfarer.png";
import Engayged from "../img/portfolio/Engayged.png";
import GigaCat from "../img/portfolio/Giga-Cat.png";
import { Link } from "react-router-dom";
import "../styles/portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="component">
        <div className="portfolio-item">
          <div className="img-container">
            <img src={Bookward} className="portfolio-img"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Bookward</h3>
            <p>Book management app for K-12 Libraries</p>
            <p>MongoDB, Express.js, React, Node.js, Mongoose</p>
            <Link to="/">Demo</Link>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={Wayfarer} className="portfolio-img"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Wayfarer</h3>
            <p>Client-directed travel blog</p>
            <p>
              CSS (Flexbox & Grid), Bootstrap, MERN stack: MongoDB, Express.js,
              React, Node.js
            </p>
            <Link to="/">Demo</Link>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={Engayged} className="portfolio-img"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Engayged</h3>
            <p>Responsive wedding-planning web app</p>
            <p>
              JavaScript, Express.js, EJS, Node.js, MongoDB, Mongoose, Bootstrap
            </p>
            <Link to="/">Demo</Link>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="img-container">
            <img src={GigaCat} className="portfolio-img"></img>
          </div>
          <div className="portfolio-item-text">
            <h3>Giga-Cat</h3>
            <p>Responsive browser game</p>
            <p>JavaScript, HTML, CSS (Flexbox & Grid)</p>
            <Link to="/">Demo</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
