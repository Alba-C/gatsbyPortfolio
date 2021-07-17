import React, { Component } from 'react';
import { css } from '@emotion/react';
import { Link, withPrefix } from 'gatsby';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  closeMenu = () => {
    this.setState({ collapsed: true });
  };

  updateDimensions() {
    if (window.innerWidth > 600) {
      this.setState({ collapsed: true });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const topNavStyles = css`
      font-size: 1.25rem;
      overflow: hidden;
      background-color: transparent;
      z-index: 999;
      display: flex;
      transition: height 0.2s ease-in-out;
      @media (max-width: 768px) {
        position: fixed;
        flex-direction: column;
        top: 0;
        left: 0;
        right: 0;
        background-color: #002851;
        height: 60px;
        overflow: visible;
      }

      .nav__brand-container {
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        &:hover {
          text-decoration: none;
          color: ${this.state.collapsed ? 'inherit' : '#bada55'};
          border-bottom: ${this.state.collapsed ? 'none' : '3px solid #bada55'};
        }
        @media (max-width: 768px) {
          margin: auto;
          position: absolute;
          top: 10px;
          padding: 0;
          margin-left: 5px;
          height: 45px;
          width: 45px;
        }
      }

      .nav__brand {
        margin-bottom: 0;
        height: auto;
        max-height: 60px;
        width: auto;
      }

      .nav__link-container {
        max-width: 1000px;
        margin: 12px auto;
        height: 100%;
        padding-right: 88px;
        transition: all 0.3s ease-in-out;
        @media (max-width: 768px) {
          background-color: #002851;
          flex-direction: column;
          min-height: 100vh;
          padding-top: 60px;
          margin: 0 0 0 auto;
          width: 400px;
          max-width: 70%;
          transform: ${this.state.collapsed ? 'translateX(400px)' : 'translateX(0)'};
        }

        .nav__link {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          border-bottom: 3px solid transparent;
          &:hover {
            text-decoration: none;
            color: #bada55;
            border-color: #bada55;
            font-weight: bold;
          }
          @media (max-width: 768px) {
            float: none;
            text-align: left;
          }
        }
      }
    `;

    return (
      <nav css={topNavStyles} id="myTopnav">
        <Link className="nav__brand-container" to="/" onClick={this.closeMenu}>
          <img className="nav__brand" src={withPrefix('assets/images/CA-Logo.png')} alt="logo" />
        </Link>
        <div className="nav__link-container">
          <a className="nav__link" href="/#projects" onClick={this.closeMenu}>
            Projects
          </a>
          <a className="nav__link" href="/#about" onClick={this.closeMenu}>
            About
          </a>
          <a className="nav__link" href="/#contact" onClick={this.closeMenu}>
            Contact
          </a>
          <Link className="nav__link" to="/resume" onClick={this.closeMenu}>
            Resume
          </Link>
        </div>
        <Hamburger collapsed={this.state.collapsed} size={40} lineColor={'white'} onClick={this.handleClick} />
      </nav>
    );
  }
}

const Hamburger = ({ collapsed, background, lineColor, size, onClick }) => {
  const burgerStyles = css`
    height: ${size}px;
    width: ${size}px;
    display: block;
    background-color: ${background};
    border: solid 1px ${lineColor} !important;
    padding: 0;
    border-radius: ${collapsed ? '10%' : '50%'};
    position: absolute;
    right: 10px;
    top: 10px;
    transition: border-radius 0.3s ease-in;
    background-color: transparent;

    .burger__line {
      display: block;
      position: absolute;
      background-color: ${lineColor};
      margin: 0 10%;
      height: 2px;
      width: 80%;
      transform-origin: left;
      transition: all 0.3s ease-in;
    }

    .burger__line--top {
      top: ${collapsed ? '15%' : `50%`};
      transform: ${collapsed ? 'rotate(0deg)' : 'translate(5px , -12px) rotate(45deg)'};
    }

    .burger__line--middle {
      transform-origin: center;
      transform: translateY(-50%) ${collapsed ? 'rotate(0deg)' : 'rotate(-45deg)'};
    }

    .burger__line--bottom {
      top: unset;
      bottom: 15%;
      transform: ${collapsed ? 'rotate(0deg)' : 'translate(5px , -2px) rotate(-45deg)'};
    }
  `;

  return (
    <button css={burgerStyles} type="button" onClick={onClick}>
      <span className="burger__line burger__line--top" />
      <span className="burger__line burger__line--middle" />
      <span className="burger__line burger__line--bottom" />
    </button>
  );
};

export default Navbar;
