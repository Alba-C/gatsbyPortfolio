import React, { Component } from 'react'
import { css } from 'emotion'

class Projects extends Component {
  render() {
    return (
      <section
        // className=" projects-wrapper"
        className={css`
          background: rgb(0, 40, 81); /* Old browsers */
          background: -moz-linear-gradient(
            45deg,
            rgb(0, 40, 81) 0%,
            rgb(2, 1, 1) 100%
          ); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            45deg,
            rgb(0, 40, 81) 0%,
            rgb(2, 1, 1) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            45deg,
            rgb(0, 40, 81) 0%,
            rgb(2, 1, 1) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002851', endColorstr='#020101',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
          text-align: center;
          padding-top: 10px;
          padding-bottom: 20px;
        `}
      >
        <h1
          className={css`
            color: #82d8d8;
          `}
        >
          Projects: {this.props.filterWord ? this.props.filterWord : 'All'}
        </h1>
        <div
          id="projects"
          className={css`
            display: flex;
            flex-wrap: wrap;
            color: white;
            align-content: space-between;
            justify-content: space-between;
            padding: 10px;
            @media (max-width: 1174px) {
              justify-content: space-around;
              /* align-items: space-around; */
            }
          `}
        >
          {this.props.filterWord
            ? this.props.projectData.map((project, i) => {
                console.log(this.props.filterWord)
                return (
                  project.keywords.indexOf(this.props.filterWord) !== -1 && (
                    <div // className="project"
                      key={i}
                      className={css`
                        padding: 20px;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        /* align-items: space-between; */
                        background-color: rgb(23, 21, 21);
                        margin: 4px;
                        max-width: 365px;
                        min-width: 23%;
                        border-radius: 3px;
                        @media (max-width: 1093px) {
                          max-width: 400px;
                        }
                        @media (max-width: 835px) {
                          max-width: 300px;
                        }
                        @media (max-width: 635px) {
                          max-width: 500px;
                        }
                      `}
                    >
                      <div>
                        <h2
                          className={css`
                            color: #82d8d8;
                          `}
                        >
                          {project.title}
                        </h2>
                        <a href={project.link} target="blank">
                          <img
                            src={project.image}
                            alt={project.title}
                            width="100%"
                            className="projectImg"
                          />
                        </a>
                      </div>
                      <div className="cardBottom">
                        <p className="projectDesc">{project.description}</p>
                        <div className="keywords">
                          <code>
                            {' '}
                            {'[ ' + project.keywords.join(', ') + ' ]'}{' '}
                          </code>
                        </div>
                      </div>
                    </div>
                  )
                )
              })
            : this.props.projectData.map((project, i) => {
                return (
                  <div
                    // className="project"
                    key={i}
                    className={css`
                      padding: 20px;
                      color: white;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      /* align-items: space-around; */
                      background-color: rgb(23, 21, 21);
                      margin: 10px;
                      max-width: 365px;
                      min-width: 23%;
                      border-radius: 3px;
                      @media (max-width: 1093px) {
                        max-width: 400px;
                      }
                      @media (max-width: 835px) {
                        max-width: 300px;
                      }
                      @media (max-width: 635px) {
                        max-width: 500px;
                      }
                    `}
                  >
                    <div>
                      <h2
                        className={css`
                          color: #82d8d8;
                        `}
                      >
                        {project.title}
                      </h2>
                      <a href={project.link} target="blank">
                        <img
                          src={project.image}
                          alt=""
                          width="100%"
                          className="projectImg"
                        />
                      </a>
                    </div>
                    <div className="cardBottom">
                      <p className="projectDesc">{project.description}</p>
                      <div className="keywords">
                        <code>
                          {' '}
                          {'[ ' + project.keywords.join(', ') + ' ]'}{' '}
                        </code>
                      </div>
                    </div>
                  </div>
                )
              })}
        </div>
      </section>
    )
  }
}

export default Projects
