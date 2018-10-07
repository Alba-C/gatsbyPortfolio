import React, { Component } from 'react'
import { css } from 'react-emotion'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thingsIdo: 'Make',
    }
  }
  mouseEnter = () => {
    switch (this.state.thingsIdo) {
      case 'Make':
        return this.setState({ thingsIdo: 'Break' })
      case 'Break':
        return this.setState({ thingsIdo: 'Fix' })
      default:
        return this.setState({ thingsIdo: 'Make' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(event) {
    let scrollTop = event.currentTarget.pageYOffset
    switch (true) {
      case scrollTop > 150 && scrollTop < 249:
        return this.setState({ thingsIdo: 'Break' })
      case scrollTop > 250:
        return this.setState({ thingsIdo: 'Fix' })
      default:
        return this.setState({ thingsIdo: 'Make' })
    }
  }

  render() {
    return <div className="">
        <div className={css`
            // className="banner"
            background-color: #f1f7ed;
            display: flex;
            font-size: 1.25em;
            flex-direction: column;
            align-items: center;`}>
          <img src="./assets/IMG_BW7038.jpg" width="150px" alt="profile headshot" className={css`
              // className="avatar"
              border-radius: 50%;
              box-shadow: 2px 2px 4px rgba(20, 20, 20, 0.2);
              position: relative;
              top: 15px;
              display: block;
              margin: 0 auto;
              margin-bottom: 20px;`} />
          <h1>Chris Albanese</h1>
          <div className={css`
              font-size: 1.25em;
              font-weight: 500;
              margin-bottom: 1rem;`} id="makeThings" onMouseEnter={this.mouseEnter}>
            Likes to
            {this.state.thingsIdo === 'Make' ? <span id="verbMake" className={css`
                  // className="verb"
                  display: inline-block;
                  border-radius: 3px;
                  color: white;
                  font-weight: 800;
                  padding: 5px 10px;
                  margin: 0 5px;
                  font-family: 'Audiowide', cursive;
                  box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                  background-color: #bada55;
                  transform: rotate(5deg);`}>
                Make
              </span> : this.state.thingsIdo === 'Break' ? <div id="break" className={css`
                  display: inline-block;`}>
                <span id="verbBreakL" className={css` // className="verb"
                  display: inline-block;
                  border-radius: 3px;
                  color: white;
                  font-weight: 800;
                  padding: 5px 10px;
                  margin: 0 5px;
                  font-family: "Audiowide", cursive;
                  box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                  color: rgb(255, 255, 255);
                  border-radius: 3px 0 0 3px;
                  background-color: rgb(189, 59, 36);
                  padding: 5px 0 5px 10px;
                  transform: rotate(-5deg) 
                  box-shadow: 5px 0px 15px 1px rgba(0, 0, 0, 0.639);
                  text-decoration: line-through;
                `}>
                  Br
                </span>
                <span id="verbBreakR" className={css`
                    // className="verb"
                    display: inline-block;
                    border-radius: 3px;
                    color: white;
                    font-weight: 800;
                    padding: 5px 10px;
                    margin: 0 5px;
                    font-family: 'Audiowide', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
                    box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                    margin: 0 5px 0 2px;
                    border-radius: 0 3px 3px 0;
                    background-color: rgb(189, 59, 36);
                    padding: 5px 10px 5px 0;
                    transform: skew(-0.05turn, 10deg);
                    box-shadow: -5px 0px 15px 1px rgba(0, 0, 0, 0.639);`}>
                  eak
                </span>
              </div> : <span id="verbFix" className={css`
                  // className="verb"
                  display: inline-block;
                  border-radius: 3px;
                  color: white;
                  font-weight: 800;
                  padding: 5px 10px;
                  margin: 0 5px;
                  font-family: 'Audiowide', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
                  box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                  background-color: #82d8d8;`}>
                Fix
              </span>}
            cool things
          </div>
          <p className={css`
              text-align: center;`}>
            Front End Developer based in Orlando, FL
          </p>
          <p className={css`
              text-align: center;`}>
            Specializing in responsive design with a clean modern asthetic
          </p>
        </div>
      </div>
  }
}
