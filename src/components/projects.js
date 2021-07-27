import React, { Component } from 'react';
import { withPrefix } from 'gatsby';
import { css } from '@emotion/react';

const projectsStyles = css`
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;

  .projects__container {
    padding: 0 20px;

    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .projects__card {
    position: relative;
    padding: 20px;
    overflow: hidden;
    background-color: #ededed;
    min-width: 100%;
    border-radius: 5px;
    transition: all 0.25s ease-in;
    a {
      text-decoration: none;
      color: inherit;
    }

    :hover {
      transform: scale(1.02);
      transition: all 0.25s ease-in;
    }
  }

  .projects__card-top {
    pointer-events: inherit;
    transition: all 0.25s ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;

    h2 {
      font-size: 1.3em;
      margin: 20px auto 0;
      :hover {
        display: none;
      }
    }
  }

  .projects__card-top__image-container {
    height: 245px;
    width: 100%;
    overflow: hidden;
  }
  .projects__card-top__image-container img {
    height: auto;
    width: auto;
    max-width: 100%;
  }
  .projects__card-top__image-caption {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .projects__card-bottom {
    background-color: #c0e0de;
    transform-origin: top left;
    transition: all 0.25s ease-out;
    position: absolute;
    pointer-events: inherit;
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1000;
  }

  .projects__card-bottom:hover,
  .projects__card-bottom:focus {
    opacity: 1;
  }

  .projects__card-bottom__title {
    position: relative;
    padding: 15px 20px;
    color: white;
    z-index: inherit;
    font-size: 1.1em;

    top: 100%;
    text-align: right;
    background-color: #002851;
    transform-origin: top left;
    transform: rotate(-45deg) skew(-45deg) translateY(300%) scale(0.7);
    margin: 0;

    opacity: 1;
    transition: all 0.25s ease-out;
  }

  .projects__card-bottom:hover .projects__card-bottom__title,
  .projects__card-bottom:focus .projects__card-bottom__title {
    opacity: 1;
    transform: rotate(-90deg) skew(0) translate(-100%);
    z-index: 1;
    top: 0;
  }

  .projects__card-bottom__description {
    position: absolute;
    top: 0;
    padding: 1em 1em 1em 3em;
    display: block;
    font-size: 1.25em;
    line-height: 1.1em;
    opacity: 0;
    text-decoration: none;
    :hover {
      text-decoration: none;
    }
  }

  .projects__card-bottom:hover .projects__card-bottom__description,
  .projects__card-bottom:focus .projects__card-bottom__description {
    opacity: 1;
    transition: all 0.5s ease-in;
  }

  .projects__card-keywords {
    pointer-events: inherit;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #002851;
    transform-origin: bottom left;
    padding: 30px 20px 20px 60px;
    display: flex;
    transform: rotate(-45deg) skew(-45deg) scale(0.7);
    transition: all 0.25s ease-in;
  }

  .projects__card-bottom:hover .projects__card-keywords {
    transform: rotateX(0deg);
    transition: all 0.25s ease-out;
  }

  .projects__card-keywords code {
    text-align: left;
    z-index: -1;
    padding-left: 1.5em 0.5em 0.5em 1em;
    background-color: transparent;

    ::before {
      position: absolute;
      color: white;
      top: -1.4em;
      font-kerning: normal;
      content: 'Tech Used:';
    }
  }

  .projects__card-bottom:hover .projects__card-keywords code {
    transform: translateX(0%) translateY(0) rotate(0deg);
    transition: all 0.25s ease-in;
  }

  @media screen and (max-width: 768px) {
    .projects__card {
      padding: 10px 10px 0;
    }

    .projects__card-top__title {
      display: none;
    }

    .projects__card-top {
      height: auto;
    }

    .projects__card-bottom {
      opacity: 1;
      flex-grow: 1;
      position: static;
      display: flex;
      flex-direction: column;

      background-color: #002851;
      max-height: 60%;
      font-size: 1.2em;
      padding: 10px 1em;
      margin: 0 -10px;
      margin-bottom: -20px;
      color: white;
    }

    .projects__card-bottom__title {
      opacity: 1;
      padding: 15px 10px;
      transform: rotate(0) skew(0) translate(0);
      transition: all 0.25s ease-out;
      text-align: center;
      top: 0;
    }

    .projects__card-bottom:hover .projects__card-bottom__title {
      transform: rotate(0) skew(0) translate(0);
    }

    .projects__card-bottom__description {
      opacity: 1;
      font-size: 0.9em;
      transition: all 0.5s ease-in;
      position: static;
      line-height: 1.6rem;
      margin: 20px 0;
      text-align: left;
      padding: 0;
    }

    .projects__card-keywords {
      position: relative;
      transform: rotateX(0deg);
      transition: all 0.25s ease-out;
      padding: 0;
    }

    .projects__card-keywords code {
      background-color: transparent;
      text-align: left;
      opacity: 1;
      line-height: 1.6rem;
      transform: translateX(0%) translateY(0) rotate(0deg);
      transition: all 0.25s ease-in;
      padding: 20px 0;

      ::before {
        top: -10px;
      }
    }
  }
`;

class Projects extends Component {
  render() {
    return (
      <section css={projectsStyles}>
        <h1>Projects: {this.props.filterWord}</h1>
        <div id="projects" className="projects__container">
          {this.props.projectData.map((project, i) => {
            return (
              <div key={i} className="projects__card">
                <figure className="projects__card-top">
                  <div className="projects__card-top__image-container">
                    <img src={withPrefix(project.image)} alt={project.title} width="100%" />
                  </div>
                  <figcaption className="projects__card-top__image-caption">
                    <h2 className="projects__card-top__title">{project.title}</h2>
                  </figcaption>
                </figure>

                <div className="projects__card-bottom">
                  <h2 className="projects__card-bottom__title">{project.title}</h2>
                  <p className="projects__card-bottom__description">{project.description}</p>
                  <a href={project.link} aria-label={project.title} target="blank">
                    <div className="projects__card-keywords">
                      <code> {'[ ' + project.keywords.join(', ') + ' ]'} </code>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Projects;
