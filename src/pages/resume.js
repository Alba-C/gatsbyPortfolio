import React from 'react'
import { css } from 'react-emotion'
import { withPrefix } from 'gatsby'
import Layout from '../components/layout'

const Resume = () => {
  const globalStyles = css`
    width: 980px;
    margin: auto;
    background-color: rgb(242, 242, 242);
    padding: 25px 45px 50px 45px;
    font-size: 0.9em;
    a {
      text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
      color: #002851;
      font-family: 'Montserrat', Tahoma, Geneva, Verdana, sans-serif;
    }
    h1 {
      font-family: 'Montserrat-Bold', Tahoma, Geneva, Verdana, sans-serif;
    }
    h2 {
      font-size: 1.35rem;
      font-style: italic;
    }
    h3 {
      font-weight: bolder;
      font-size: 1.35rem;
      font-style: italic;
      border-bottom: solid 4px #002851;
      margin-top: 1rem;
    }
    h4 {
      font-size: 1rem;
      font-weight: 600;
    }`

  const skill = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    /* h4 {
      width: 15%;
    } */

    span {
      width: 83%;
      margin-left: 10px;
    }`
  const cert = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
      width: 70%;
      margin-left: 10px;
    }
  `
  const school = css`
    display: flex;
    justify-content: space-between;

    span {
      width: 70%;
      margin-left: 10px;
    }
  `
  return <Layout>
      <div className={globalStyles}>
        <div className="res-header">
          <div className={css`
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              border-bottom: solid 6px #002851;`}>
            <h1>Christopher Albanese</h1>
            <h2>| Front-End Web Developer</h2>
          </div>
        </div>
        <div className={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;`}>
          <a href="mailto:Christopher@CafeRE.com" className={css`
              color: rgb(69, 69, 69);`}>
            Christopher@CafeRE.com
          </a>
          <a href={withPrefix("/static/assets/resume.pdf")} download id="btnResume" className={css`
              border-radius: 3px;
              background-color: #bada55;
              padding: 5px 10px;
              margin-top: 5px;
              color: rgb(69, 69, 69);
              box-shadow: 0px 1px 1px 0 rgba(69, 69, 69, 0.439);`}>
            Download PDF
          </a>
        </div>
        <div className="res-profile">
          <h3>Professional Summary</h3>
          <p>
            With extensive experience in business development, marketing and
            education, Chris brings a deep understanding that code flows from
            keyboards to customers, and how the requirements of the business
            and its stakeholders ultimately need to intersect with the needs
            of the client. This fuels his appreciation for user-driven
            development.
          </p>
        </div>
        <div className="skills">
          <h3>Technical Skills</h3>
          <div className={skill}>
            <h4>Front End: </h4>
            <span>
              JavaScript (ES6), HTML, CSS, SASS (SCSS), JSX, Swift, Markdown,
              Wordpress, jQuery, Bootstrap, Emotion JS.
            </span>
          </div>
          <div className={skill}>
            <h4>Back End: </h4>
            <span>Express, Mongo DB, Node JS, Mongoose</span>
          </div>
          <div className={skill}>
            <h4>OS/Software: </h4>
            <span>
              macOS, Windows, Visual Studio Code, Atom, Xcode, Git & Github,
              Photoshop, fileMaker Pro, Glitch, CodeSandbox.io, MS Office
            </span>
          </div>
        </div>

        <div>
          <div className="experience">
            <h3>Relevant Experience </h3>
          <a href="http://www.ChristopherAlbanese.com" target="_blank" rel="noopener noreferrer">
              <h4>www.ChristopherAlbanese.com - 2018 - present</h4>
            </a>

            <p>
              A Personal portfolio site designed to showcase recent projects
              and certifications. This was built using React v16 with Gatsby
              v2 and styled with CSS-in-JS using the Emotion-JS library.{' '}
            </p>
          <a href="http://www.ReCalcApp.com" target="_blank" rel="noopener noreferrer">
              <h4>www.RECalcApp.com – Jan 2017 – Nov 2017 </h4>
            </a>

            <p>
              An iOS app for Real Estate Professionals, to assist with common
              math and date calculations. This was built in Xcode using Swift
              4, UIKit, CocoaPods and incorporates ads using AdMob from
              Google.
            </p>
          <a href="http://www.RealEstateAcademyofOrlando.com" target="_blank" rel="noopener noreferrer">
              <h4>
                www.RealEstateAcademyofOrlando.com – June 2016 – Present{' '}
              </h4>
            </a>

            <p>
              An online real estate school built on WordPress with WooCommerce
              and incorporating payment gateways from Square and PayPal.
            </p>
          </div>
        </div>

        <div>
          <div className="certificates">
            <a href="https://www.freecodecamp.org/alba-c" target="_blank" rel="noreferrer noopener" className={css`
                cursor: pointer;
                color: inherit;
                text-decoration: none;
                &:hover {
                  text-decoration: none;
                  color: inherit;
                }`}>
              <div>
                <h3 className={``}>Certificates: </h3>
                <span className={css`
                    position: relative;
                    font-style: italic;
                    top: -3.1rem;
                    left: 160px;
                    font-size: 1.1rem;`}>
                  FCC | FreeCodeCamp.org
                </span>
              </div>

              <p className={css`
                  margin-top: -3rem;`}>
                (approximately 300 hours per certificate)
              </p>
              <div className={cert}>
                <h4>Responsive Web Design: </h4>
                <span>
                  HTML, CSS, Visual Design, A11Y, Responsive Design
                  Principles, CSS Flexbox, CSS Grid, User Story Projects
                </span>
              </div>
              <div>
                <h4>JavaScript Algorithms and Data Structures: </h4>
                <div className={cert}>
                  <div /> <span>
                    JavaScript, ES6, Regular Expressions, Debugging, Data
                    Structures, Algorithm Scripting, OOP, Functional
                    Programming, Intermediate Algorithm Scripting, User Story
                    Projectss
                  </span>
                </div>
              </div>
              <div className={cert}>
                <h4>Front End Libraries: </h4>
                <span>
                  Bootstrap, jQuery, SASS, React, Redux, React & Redux, User
                  Story Projects
                </span>
              </div>
              <div className={cert}>
                <h4>Data Visualization: </h4>
                <span>
                  Data Visualization with D3.js, JSON APIs and Ajax, User
                  Story Projects
                </span>
              </div>
              <div className={cert}>
                <h4>APIs and Microservices: </h4>
                <span>
                  Managing Packages with NPM, Basic Node and Express, MongoDB
                  and Mongoose, APIs and Microservices Projects
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="res-education">
          <h3>Education</h3>
          <div className={school}>
            <h4>University of Florida</h4>
            <span className="degree">
              Bachelors of Arts, Business Administration
            </span>
          </div>
          <div className={school}>
            <h4>University of S. Florida</h4>
            <span className="degree">Associate of Arts</span>
          </div>
        </div>
      </div>
    </Layout>
}

export default Resume
