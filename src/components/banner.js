import React, { Component } from 'react';
import { css } from '@emotion/react';
import { withPrefix } from 'gatsby';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thingsIdo: 'Make'
    };
  }
  mouseEnter = () => {
    switch (this.state.thingsIdo) {
      case 'Make':
        return this.setState({ thingsIdo: 'Break' });
      case 'Break':
        return this.setState({ thingsIdo: 'Fix' });
      default:
        return this.setState({ thingsIdo: 'Make' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let scrollTop = event.currentTarget.pageYOffset;
    switch (true) {
      case scrollTop > 150 && scrollTop < 249:
        return this.setState({ thingsIdo: 'Break' });
      case scrollTop > 250:
        return this.setState({ thingsIdo: 'Fix' });
      default:
        return this.setState({ thingsIdo: 'Make' });
    }
  }

  render() {
    return (
      <section
        css={css`
          background-color: #f1f7ed;
          background-color: #fff;
          margin: 0 auto;
          max-width: 1200px;
          display: flex;
          font-size: 1.25em;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        `}
      >
        <img
          src={withPrefix('/assets/images/IMG_BW7038.jpg')}
          width="150px"
          alt="profile headshot"
          css={css`
            border-radius: 50%;
            box-shadow: 2px 2px 4px rgba(20, 20, 20, 0.2);
            position: relative;
            top: 15px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
          `}
        />
        <h1
          css={css`
            font-size: min(1.5em, 7vw);
          `}
        >
          Chris Albanese
        </h1>
        <div
          css={css`
            font-size: 1.25em;
            font-size: min(1.25em, 5vw);
            font-weight: 500;
            text-align: center;
            margin: 0 auto;
            padding: 0 20px;
            margin-bottom: 1rem;
          `}
          id="makeThings"
          role="none"
          onMouseEnter={this.mouseEnter}
        >
          Likes to
          {this.state.thingsIdo === 'Make' ? (
            <span
              id="verbMake"
              css={css`
                display: inline-block;
                border-radius: 3px;
                color: white;
                font-weight: 800;
                padding: 10px 15px;
                margin: 0 5px;
                font-family: 'Audiowide', cursive;
                box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                background-color: #bada55;
                transform: rotate(5deg);
              `}
            >
              Make
            </span>
          ) : this.state.thingsIdo === 'Break' ? (
            <div
              id="break"
              css={css`
                display: inline-block;
                filter: drop-shadow(5px 5px 5px rgba(69, 69, 69, 0.639));
              `}
            >
              <span
                id="verbBreakL"
                css={css`
                  display: inline-block;
                  border-radius: 3px;
                  color: white;
                  font-weight: 800;
                  padding: 10px 15px;
                  margin: 0 5px;
                  font-family: 'Audiowide', cursive;
                  color: rgb(255, 255, 255);
                  border-radius: 5px 0 0 5px;
                  border-right: 2px solid grey;
                  background-color: rgb(189, 59, 36);
                  padding: 9px 0 9px 15px;
                  transform: rotate(-5deg);
                  box-shadow: 5px 0px 15px 1px rgba(0, 0, 0, 0.639);
                  clip-path: polygon(44% 0, 100% 0, 91% 12%, 100% 23%, 90% 37%, 95% 48%, 75% 73%, 93% 66%, 87% 76%, 100% 79%, 93% 99%, 1% 100%, 0% 1%);
                `}
              >
                Br
              </span>
              <span
                id="verbBreakR"
                css={css`
                  display: inline-block;
                  border-radius: 3px;
                  color: white;
                  font-weight: 800;
                  margin: 0 5px;
                  font-family: 'Audiowide', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
                  box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                  margin: 0 5px 0 2px;
                  border-radius: 0 5px 5px 0;
                  background-color: rgb(189, 59, 36);
                  padding: 10px 15px 10px 0;
                  transform: skew(-0.05turn, 10deg);
                  box-shadow: -5px 0px 15px 1px rgba(0, 0, 0, 0.639);
                  clip-path: polygon(11% 9%, 13% 1%, 100% 0, 100% 100%, 1% 99%, 6% 81%, 1% 61%, 10% 54%, 0 36%, 11% 26%, 0 15%);
                `}
              >
                eak
              </span>
            </div>
          ) : (
            <span
              id="verbFix"
              css={css`
                display: inline-block;
                border-radius: 3px;
                color: white;
                font-weight: 800;
                padding: 10px 15px;
                margin: 0 5px;
                font-family: 'Audiowide', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
                box-shadow: 0px 1px 5px 1px rgba(69, 69, 69, 0.639);
                background-color: #002851;
              `}
            >
              Fix
            </span>
          )}
          cool things
        </div>
        <p
          css={css`
            text-align: center;
            padding: 0 20px;
          `}
        >
          Full stack developer based in Orlando, FL
        </p>
        <p
          css={css`
            text-align: center;
            padding: 0 20px;
          `}
        >
          Specializing in responsive design with a clean modern asthetic
        </p>
      </section>
    );
  }
}
