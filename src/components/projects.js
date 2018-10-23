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
        /* font-size: 1em; */
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

        /* transform: rotate(-90deg) skew(0) translate(-100%); */
        opacity: 1;
        transition: all .25s ease-in ;
        
      
      }
 

      p {
        position: absolute;
        top: 0;
        padding: 1em 1em 1em 3em;
        display: block;
        /* margin-bottom: 8em; */
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
        /* margin: 1em; */
        opacity: 0;
        background-color: transparent;

        ::before {
          position: absolute;
          color: white;
          top: -1em;
          font-kerning: normal;
          /* font-size: 1.25em; */
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
        /* background-color: transparent; */
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
`
const outerCard = css`
  position: relative;
  padding: 20px;
  margin: 10px;
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
    /* justify-content: center; */
    transition: all 0.25s ease-in;
    
  }
  }
`
const cardTopHov = css`
  pointer-events: inherit;
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.3em;
    :hover {
      display: none;
    }
  }
  @media (max-width: 759px) {
    h2 {
      display: none;
    }
  }
`

class Projects extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  handleScroll = e => {
    // let project = document.getElementsByClassName("outerCard")
    // var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    // let offsetTop = this.instance.getBoundingClientRect().top
    console.log(e.currentTarget)
  }

  componentDidMount = props => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }
  render() {
    return (
      <section className={css``}>
        <div // className=" projects-wrapper"
          className={css`
            max-width: 1200px;
            margin: 10px auto;

            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          `}
        >
          <h1
            className={css`
              /* color: #82d8d8; */
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
                        className={outerCard}
                      >
                        <div className={cardTopHov}>
                          {/* <a
                          href={project.link}
                          aria-label={project.title}
                          target="blank"
                        > */}
                          <img
                            src={withPrefix(project.image)}
                            alt={project.title}
                            width="100%"
                            className="projectImg"
                          />
                          {/* </a> */}
                          <h2>{project.title}</h2>
                        </div>

                        <div className={cardBottom}>
                          <a
                            href={project.link}
                            aria-label={project.title}
                            target="blank"
                          >
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
                          </a>
                        </div>
                      </div>
                    )
                  )
                })
              : this.props.projectData.map((project, i) => {
                  return (
                    <div
                      id={project.title}
                      onScroll={this.handleScroll}
                      ref={this.myRef}
                      key={
                        i // className="project"
                      }
                      className={outerCard}
                    >
                      <div className={cardTopHov}>
                        {/* <a
                          href={project.link}
                          aria-label={project.title}
                          target="blank"
                        > */}
                        <img
                          src={withPrefix(project.image)}
                          alt={project.title}
                          width="100%"
                          className="projectImg"
                        />
                        {/* </a> */}
                        <h2>{project.title}</h2>
                      </div>

                      <div className={cardBottom}>
                        <a
                          href={project.link}
                          aria-label={project.title}
                          target="blank"
                        >
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
                        </a>
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
