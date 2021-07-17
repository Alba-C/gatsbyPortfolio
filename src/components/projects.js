import { Component } from 'react';
import { withPrefix } from 'gatsby';
import { css, jsx } from '@emotion/react';
/** @jsx jsx */

const projectsContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 1174px) {
    justify-content: space-around;
  }
`;
const cardBottom = css`
  position: absolute;
  pointer-events: inherit;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1000;
   .keywords {
     display: flex;
   }
   h2 {
     font-size: 1.3em;
   }

   @media (max-width: 759px) {
      opacity: 1;
      position: static;
      background-color: #002851;
      height: inherit;
      font-size: 1.2em;
      padding: 10px 1em;
      margin: -10px;
      color: white;
      .keywords{
        position: relative;
      }
      code {
        background-color: transparent;
        text-align: left;
        ::before {
        position: absolute;
        color: white;
        top: -1.25em;
        font-kerning: normal;
        content: 'Tech Used:';
        }
      }
    }

    @media (min-width: 760px) {
       background-color: #c0e0de;
       transform-origin: top left;
        transition: all .25s ease-out;
      h2 {
        position: relative;
        padding: 15px 0;
        color: white;
        z-index: inherit;
        font-size: 1.2em;

        top: 100%;
        text-align: center;
        background-color: #002851;
        transform-origin: top left;
        transform: rotate(-45deg) skew(-45deg) translateY(300%) scale(0.7);

        opacity: 1;
        transition: all .25s ease-in ;
        
      
      }
 

      p {
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
          
      .keywords {
        pointer-events: inherit;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #002851;
        padding-left: 3em;
        padding-top: 1em;
        padding-bottom: .5em;
        padding-right: 1em;
        transform-origin: bottom left;
        transform: rotate(-45deg) skew(-45deg) scale(0.7);
         transition: all .25s ease-in ;
      }
      code {
        text-align: left;
        z-index: -1;
        padding-left: 1.5em .5em 0.5em 1em;
        opacity: 0;
        background-color: transparent;

        ::before {
          position: absolute;
          color: white;
          top: -1em;
          font-kerning: normal;
          content: 'Tech Used:';
        }
          } 
      :hover {
        opacity: 1;
        h2 {
          opacity: 1;
          transform: rotate(-90deg) skew(0) translate(-100%);
          transition: all 0.25s ease-out;
          z-index: 1200;
          top: 0;
        }
        p {
          opacity: 1;
          transition: all 0.5s ease-in;
        }
        .keywords {
          transform: rotateX(0deg);
          margin-bottom: -0.5em;
          transition: all 0.25s ease-out;
        }
        code {
          opacity: 1;
          transform: translateX(0%) translateY(0) rotate(0deg);
          transition: all 0.25s ease-in;
        }
      }                 

      :focus {
        opacity: 1;
        transform: scale(1.2)
        background-color: #c0e0de;
        transition: all 0.25s ease-out;
        h2 {
          opacity: 1;
          transform: rotate(-90deg) skew(0) translate(-100%);
          transition: all 0.25s ease-out;

          top: 0;
        }
        p {
          opacity: 1;
          transition: all 0.5s ease-in;
        }
        .keywords {
          transform: rotateX(0deg);
          transition: all 0.25s ease-out;
        }
        code {
          opacity: 1;
          transform: translateX(0%) translateY(0) rotate(0deg);
          transition: all 0.25s ease-in;
        }
      }
  }
`;
const outerCard = css`
  position: relative;
  padding: 20px;
  margin: 10px;
  overflow: hidden;
  background-color: #ededed;
  max-width: 365px;
  min-width: 350px;
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
  a {
    text-decoration: none;
    color: inherit;
  }

  :hover{
    transform: scale(1.02);
    transition: all 0.25s ease-in;
    
  }
  }
`;
const cardTop = css`
  pointer-events: inherit;
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 325px;
  h2 {
    font-size: 1.3em;
    margin: 0;
    :hover {
      display: none;
    }
  }
  .cart-top__image-container {
    height: 245px;
    width: 100%;
    overflow: hidden;
    border: 1px solid red;
  }
  .cart-top__image-container img {
    height: auto;
    width: auto;
    max-width: 100%;
  }
  .cart-top__image-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  @media (max-width: 759px) {
    h2 {
      display: none;
    }
  }
`;

class Projects extends Component {
  render() {
    return (
      <section>
        <div
          css={css`
            max-width: 1200px;
            margin: 10px auto;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          `}
        >
          <h1
            css={css`
              margin-bottom: 0;
            `}
          >
            Projects: {this.props.filterWord}
          </h1>
          <div id="projects" css={projectsContainer}>
            {this.props.projectData.map((project, i) => {
              return (
                <div key={i} css={outerCard}>
                  <div css={cardTop}>
                    <div className="cart-top__image-container">
                      <img src={withPrefix(project.image)} alt={project.title} width="100%" />
                    </div>
                    <div className="cart-top__image-title">
                      <h2>{project.title}</h2>
                    </div>
                  </div>

                  <div css={cardBottom}>
                    <a href={project.link} aria-label={project.title} target="blank">
                      <h2>{project.title}</h2>
                      <p
                        css={css`
                          text-align: left;
                        `}
                      >
                        {project.description}
                      </p>
                      <div className="keywords">
                        <code> {'[ ' + project.keywords.join(', ') + ' ]'} </code>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
