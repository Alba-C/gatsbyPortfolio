import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import { css } from 'emotion'

const cardBottom = css`
  position: absolute;
  pointer-events: inherit;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* display: flex; */
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  height: 100%;

  /* padding-left: 4em; */
  z-index: 1000;

  h2 {
    position: absolute;
    padding: 10px;
    color: white;
    /* top: 10px; */
    text-align: center;
    top: 100%;
    left: 0px;
    right: 0px;
    background-color: #002851;
    transform-origin: top left;
    transform: rotate(-45deg) skew(45deg);
    opacity: 1;
    transition: all 0.25s ease-in;
    /* z-index: 10000; */
  }

  p {
    padding: 1em 1em 7em 3em;
    margin-bottom: 8em;
    font-size: 1.5em;
    line-height: 1.1em;
    opacity: 0;
  }
  .keywords {
   
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #002851;
    padding-left: 2em;
    padding-left: 2em;
    padding-top: 2em;
    z-index: -1;
    padding-bottom: 1em;
    padding-right: 1.5em;
    z-index: -1;
    transform-origin: bottom left;
    transform: translateX(-0%) translateY(0%) rotate(-45deg) skew(-45deg);
  }
  code {
    z-index: -1;
    /* text-align: center;
    position: absolute;
    font-size: 1em;
    line-height: 1.1em;
    right: 0;
    left: 0;
    bottom: 0;
    /* width: 100%; */
    /* left: 2em; */
    /* padding: 1.5em; */
    /* padding: 1em 1em 1em 3em; */
    padding-left: 1.5em 0.5em 0.5em 2em;
    margin: 1em;
    opacity: 0;
    background-color: transparent;
    /* transform-origin: bottom right; */
    /* transform: translateX(-0%) translateY(0%) rotate(45deg); */
    ::before {
      position: absolute;
      color: white;
      top: 0.25em;
      content: 'tech';
    }
  }
  :hover {
    opacity: 1;
    h2 {
      opacity: 1;
      transform: rotate(-90deg) skew(0);
      transition: all 0.25s ease-in;
    }
    p {
      opacity: 1;
      transition: all 0.5s ease-in;
    }
    .keywords {
      transform: rotateX(0deg) perspective(00px) translateX(0%) translateY(0)
        rotate(0deg);
      transition: all 0.25s ease-in;
    }
    code {
      opacity: 1;
      transition: all 0.25s ease-in;
      transform: translateX(0%) translateY(0) rotate(0deg);
    }
  }
`
const outerCard = css`
  position: relative;
  padding: 20px;
  margin: 10px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  background-color: #c0e0de;
  background-color: #ededed;
  max-width: 365px;
  min-width: 23%;
  border-radius: 3px;
  transition: all 0.25s ease-in;
  @media (max-width: 1093px) {
    max-width: 400px;
  }
  @media (max-width: 835px) {
    max-width: 300px;
  }
  @media (max-width: 635px) {
    max-width: 500px;
  }
  ::before {
    pointer-events: inherit;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #c0e0de;
    /* background-color: #bada55; */
    opacity: 0.2;
    z-index: 1;
    opacity: 0;
    border-radius: 20px;
    /* transform: translateX(-0%) rotate(0deg) scale(0.1) skew(90deg); */
    transition: all 0.25s ease-in;
  }
  ::after {
    pointer-events: inherit;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #c0e0de;
    /* background-color: #bada55; */
    opacity: 0.2;
    z-index: 100;
    opacity: 0;
    /* border-radius: 50%; */
    transform: translateX(-0%) rotate(0deg) scale(0.85) skew(-1deg);
    transition: all 0.25s ease-in;
  }
  :hover {
    transform: scale(1.02);
    justify-content: center;
    transition: all 0.25s ease-in;
    ::before,
    ::after {
      pointer-events: inherit;
      background-color: #c0e0de;
      opacity: 0.8;
      transform: translateX(0%) rotate(0deg) scale(1) skew(0);
      border-radius: 5px;
    }
    h2 & :first-child {
      display: none;
      position: absolute;
      transition: all 0.25s ease-in;
    }
    a {
      transform: scale(1.05);
      transition: all 0.25s ease-in;
    }
  }
`
const cardTopHov = css`
  transition: all 0.25s ease-in;
  /* opacity: 0.2; */
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    /* display: inline-block; */
    /* margin: 10px; */
    /* width: 100%; */
    /* height: 3em; */

    /* background-color: red; */
    /* padding: 0 20px; */
    /* position: absolute; */
    /* text-align: left; */
    /* float: right; */
    /* top: 0; */
    /* bottom: 0; */
    /* float: left; */

    /* transform-origin: top left; */
    /* transform: rotate(-90deg); */
  }
  a {
    /* display: none; */
  }
  :hover {
    /* color: blue;
   display: inherit; */
    h2 {
      /* position: absolute; */
    }
  }
`
const cardTopOld = css`
  z-index: 1;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease-in;
  :hover {
    /* color: blue;
   display: inherit; */
    h2 {
      /* position: absolute; */
    }
  }
`
const cardTop = css`
  z-index: 1;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease-in;
  :hover {
    /* color: blue;
   display: inherit; */
    h2 {
      /* position: absolute; */
    }
  }
`

class Projects extends Component {
  render() {
    return (
      <section className={css``}>
        <div
          // className=" projects-wrapper"
          className={css`
            max-width: 1200px;
            margin: 0 auto;
            // background: rgb(0, 40, 81); /* Old browsers */
            // background: -moz-linear-gradient(
            //   45deg,
            //   rgb(0, 40, 81) 0%,
            //   rgb(2, 1, 1) 100%
            // ); /* FF3.6-15 */
            // background: -webkit-linear-gradient(
            //   45deg,
            //   rgb(0, 40, 81) 0%,
            //   rgb(2, 1, 1) 100%
            // ); /* Chrome10-25,Safari5.1-6 */
            // background: linear-gradient(
            //   45deg,
            //   rgb(0, 40, 81) 0%,
            //   rgb(2, 1, 1) 100%
            // ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002851', endColorstr='#020101',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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
              // color: red;
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
                  return (
                    project.keywords.indexOf(this.props.filterWord) !== -1 && (
                      <div
                        key={
                          i // className="project"
                        }
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
                          <a
                            href={project.link}
                            target="blank"
                            aria-label={project.title}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              width="100%"
                              className="projectImg"
                            />
                          </a>
                        </div>
                        <div className={cardBottom}>
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
                      key={
                        i // className="project"
                      }
                      className={outerCard}
                    >
                      <div className={cardTopHov}>
                        <a
                          href={project.link}
                          aria-label={project.title}
                          target="blank"
                        >
                          <img
                            src={
                              withPrefix(project.image) // src={project.image}
                            }
                            alt={project.title}
                            width="100%"
                            className="projectImg"
                          />
                        </a>
                        <h2>{project.title}</h2>
                      </div>

                      <div className={cardBottom}>
                        <h2>{project.title}</h2>
                        <p
                          className={css`
                            text-align: left;
                          `}
                        >
                          {project.description}
                        </p>
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
        </div>
      </section>
    )
  }
}

export default Projects
