import React from 'react'
import { css } from 'react-emotion';
import Layout from '../components/layout'

const Resume = () => {
  return <Layout>
      <div className="resume" className={css`
          width: 950px;
          margin: auto;
          background-color: rgb(249, 242, 234);
          padding: 15px 25px;
          font-size: 0.9em;
          /* font-family: "Audiowide", sans-serif; */`}>
        <div className="res-header">
          <h1>Christopher Albanese</h1>
          <h3>Front-End Web Developer</h3>
          <button id="btnResume" className={css`
              border-radius: 3px;`}>
            Download PDF
          </button>
          <a href="mailto:Christopher@CafeRE.com">Christopher@CafeRE.com</a>
        </div>
        <div className="res-profile">
          <h3>profile</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate laborum quos repellendus consequuntur corporis
            voluptatibus. Distinctio sapiente, vero, a iusto incidunt libero
            ipsam mollitia consectetur fugit nesciunt debitis nisi
            necessitatibus odio maxime saepe magni et sequi, exercitationem
            magnam aliquid iure quaerat ratione! Molestiae dolores explicabo,
            et maxime quasi doloremque beatae.
          </p>
        </div>
        <div className="technologies">
          <h2>Technologies</h2>
          <div className="col" id="col1">
            <h3>Languages </h3>
            <ul>
              <li>Item 2</li>
              <li>Item 2</li>
              <li>Item 2</li>
            </ul>
          </div>
          <div className="col" id="col2">
            <h3>Languages </h3>
            <ul>
              <li>Item 2</li>
              <li>Item 2</li>
              <li>Item 2</li>
            </ul>
          </div>
          <div className="col" id="col3">
            <h3>Languages </h3>
            <ul>
              <li>Item 2</li>
              <li>Item 2</li>
              <li>Item 2</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="group">
            <h3>Project</h3>
            <p className="dates">Sept 2018</p>
            <p className="subHead">Subheading</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              ipsam corrupti amet nihil totam est molestias, maxime dolorum.
              Quaerat vero accusantium eligendi facere eius aut saepe nulla
              aliquid. Totam dignissimos, architecto eaque blanditiis dolor id
              minus obcaecati necessitatibus nisi aspernatur?
            </p>
          </div>
          <div className="res-group">
            <h3>Project</h3>
            <p className="dates">Sept 2018</p>
            <p className="subHead">Subheading</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              ipsam corrupti amet nihil totam est molestias, maxime dolorum.
              Quaerat vero accusantium eligendi facere eius aut saepe nulla
              aliquid. Totam dignissimos, architecto eaque blanditiis dolor id
              minus obcaecati necessitatibus nisi aspernatur?
            </p>
          </div>
        </div>
        <div className="res-education">
          <h2>Education</h2>
          <div className="school">
            <h3>University of Florida</h3>
            <p className="degree">
              Bachelors of Arts, Business Administration
            </p>
          </div>
          <div className="school">
            <h3>University of South Florida</h3>
            <p className="degree">Associate of Arts</p>
          </div>
        </div>
      </div>
    </Layout>
}

export default Resume;
