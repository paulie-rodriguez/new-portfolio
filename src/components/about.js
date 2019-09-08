import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import { Parallax } from 'react-scroll-parallax';

const About = () => (
  <div className="columns features">
    <div className="column is-4">
      <div className="card is-shady">
        <div className="card-image has-text-centered">
          <i className="fa fa-paw" />
        </div>
        <div className="card-content">
          <div className="content">
            <h4>Front end. </h4>
            <p>I have built front ends featuring:</p>
            <ul>
              <li>Bulma Bootstrap Materialize CSS frameworks</li>
              <li>Image submissions</li>
              <li>React</li>
              <li>Gatsby js Markdown templating</li>
              <li>Responsive DOM manipulation in vanilla javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="column is-4">
      <div className="card is-shady">
        <div className="card-image has-text-centered">
          <i className="fa fa-empire" />
        </div>
        <div className="card-content">
          <div className="content">
            <h4>Back end.</h4>

            <p>
              I have experience building speedy responsive back end applications
              featuring:
            </p>
            <ul>
              <li>Google Firebase</li>
              <li>MongoDB / Mongoose</li>
              <li>MYSQL / Sequelize</li>
              <li>GraphQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="column is-4">
      <div className="card is-shady">
        <div className="card-image has-text-centered">
          <i className="fa fa-apple" />
        </div>
        <div className="card-content">
          <div className="content">
            <h4>Design.</h4>

            <p>I have years of experience in visual arts ranging from:</p>
            <ul>
              <li>Commercial Photography</li>
              <li>Photo Journalism</li>
              <li>Studio Lighting</li>
              <li>Graphic Design</li>
              <li>Vector Art</li>
              <li>Digital Illustration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
