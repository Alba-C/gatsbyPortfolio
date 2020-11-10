import React from 'react'
import { css } from 'react-emotion'
import { withPrefix } from 'gatsby'
import Layout from '../components/layout'

const Resume = () => {
  const globalStyles = css`
    width: 1024px;
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
    }
  `

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
    }
  `
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
  return (
    <Layout>
      <div className={globalStyles}>
        <div className="res-header">
          <div
            className={css`
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              border-bottom: solid 6px #002851;
            `}
          >
            <h1>Chris Albanese</h1>
            <h2>| Front-End Web Developer</h2>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
          `}
        >
          <a
            href="mailto:Christopher@CafeRE.com"
            className={css`
              color: rgb(69, 69, 69);
            `}
          >
            Christopher@CafeRE.com
          </a>
          <a
            href={withPrefix(
              '/static/assets/chris_albanese_web_dev_11_2020.pdf'
            )}
            download
            id="btnResume"
            className={css`
              border-radius: 3px;
              background-color: #bada55;
              padding: 5px 10px;
              margin-top: 5px;
              color: rgb(69, 69, 69);
              box-shadow: 0px 1px 1px 0 rgba(69, 69, 69, 0.439);
            `}
          >
            Download PDF
          </a>
        </div>
        <div className="res-profile">
          <h3>Professional Summary</h3>
          <p>
            Front-End Developer with a primary focus on Javascript and React.
            Chris has extensive experience in business development, marketing
            and education and brings a deep understanding of how quality
            software development can enrich the lives of users and exceed the
            goals of the stake holders.
          </p>
        </div>
        <div className="skills">
          <h3>Technical Skills</h3>
          <div className={skill}>
            <h4>Front End: </h4>
            <span>
              JavaScript, HTML5, CSS3, React, Gatsby, Redux, JSX, jQuery, Swift,
              Markdown, TypeScript, Wordpress, Bootstrap, Emotion JS, D3JS,
              Canvas, Sass/SCSS
            </span>
          </div>
          <div className={skill}>
            <h4>Back End: </h4>
            <span>
              REST Api, Express, Mongo DB, Node JS, Mongoose, FireBase
            </span>
          </div>
          <div className={skill}>
            <h4>OS/Software: </h4>
            <span>
              Git, Github, VSCode, Vim, Sketch, PhotoShop, Illustrator, Figma,
              macOS, Windows
            </span>
          </div>
        </div>

        <div>
          <div className="experience">
            <h3>Relevant Experience </h3>

            <h4>
              Software Engineer,{' '}
              <a
                href="http://www.photoday.io"
                target="_blank"
                rel="noopener noreferrer"
                className={css`
                  color: rgb(69, 69, 69);
                `}
              >
                PhotoDay.io{' '}
              </a>
              ; Orlando, FL — Dec 2018–Present
            </h4>

            <p>
              Develop and maintain business applications for photography studios
              and consumer facing e-commerce website. Follow agile methodologies
              to quickly engineer and iterate features while adhering to best
              practices to ensure code is readable, maintainable and easily
              refactored. I was instrumental in shipping a number of prominent
              features like, Gallery List Virtualization, Drag and Drop
              matching, Custom Theme Previews, Image Cropping and Virtual
              Preview of print products.
            </p>

            <h4>
              Mobile Developer,{' '}
              <a
                href="http://www.ReCalcApp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.RECalcApp.com{' '}
              </a>
              ; Orlando, FL – June 2017 – Oct 2017{' '}
            </h4>

            <p>
              An iOS app for Real Estate Professionals, to assist with common
              math and date calculations. This was built in Xcode using Swift 4,
              UIKit, CocoaPods and incorporates ads using AdMob from Google.
            </p>

            <h4>
              Web Developer & Owner,{' '}
              <a
                href="http://www.RealEstateAcademyofOrlando.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.RealEstateAcademyofOrlando.com{' '}
              </a>
              ; Orlando, FL – June 2016 – Present{' '}
            </h4>

            <p>
              Developed and maintain an eCommerce site for a real estate school
              built on WordPress using WooCommerce and incorporating payment
              gateways from Square and PayPal
            </p>
          </div>
        </div>

        <div className="certificates">
          <a
            href="https://www.freecodecamp.org/alba-c"
            target="_blank"
            rel="noreferrer noopener"
            className={css`
              cursor: pointer;
              color: inherit;
              text-decoration: none;
              &:hover {
                text-decoration: none;
                color: inherit;
              }
            `}
          >
            <div>
              <h3>Certificates: </h3>
              <span
                className={css`
                  position: relative;
                  font-style: italic;
                  top: -3.1rem;
                  left: 200px;
                  font-size: 1.1rem;
                `}
              >
                FCC | FreeCodeCamp.org
              </span>
            </div>

            <p
              className={css`
                margin-top: -3rem;
              `}
            >
              (approximately 300 hours per certificate)
            </p>
            <div className={cert}>
              <h4>Responsive Web Design: </h4>
              <span>
                HTML, CSS, Visual Design, A11Y, Responsive Design Principles,
                CSS Flexbox, CSS Grid, User Story Projects
              </span>
            </div>
            <div>
              <h4>JavaScript Algorithms and Data Structures: </h4>
              <div className={cert}>
                <div />{' '}
                <span>
                  JavaScript, ES6, Regular Expressions, Debugging, Data
                  Structures, Algorithm Scripting, OOP, Functional Programming,
                  Intermediate Algorithm Scripting, User Story Projectss
                </span>
              </div>
            </div>
            <div className={cert}>
              <h4>Front End Libraries: </h4>
              <span>
                Bootstrap, jQuery, SASS, React, Redux, React & Redux, User Story
                Projects
              </span>
            </div>
            <div className={cert}>
              <h4>Data Visualization: </h4>
              <span>
                Data Visualization with D3.js, JSON APIs and Ajax, User Story
                Projects
              </span>
            </div>
            <div className={cert}>
              <h4>APIs and Microservices: </h4>
              <span>
                Managing Packages with NPM, Basic Node and Express, MongoDB and
                Mongoose, APIs and Microservices Projects
              </span>
            </div>
          </a>
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
  )
}

export default Resume
