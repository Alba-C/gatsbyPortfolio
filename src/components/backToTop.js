import React, { Component } from 'react';
import { css } from '@emotion/react';
import Chevron from '../components/chevron';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: '/#',
      bgColor: 'rgb(189, 59, 36)',
      arrowColor: 'white',
      showBackToTop: false
    };
  }

  handleScroll(event) {
    const scrollTop = event.currentTarget.pageYOffset;
    const windowHeight = document.documentElement.getBoundingClientRect().height;
    const width = window.innerWidth;
    switch (true) {
      case width <= 400 && scrollTop / windowHeight >= 0.94:
        return this.setState({ showBackToTop: false });
      case width > 400 && width <= 600 && scrollTop / windowHeight >= 0.9:
        return this.setState({ showBackToTop: false });
      case width > 600 && width <= 1000 && scrollTop / windowHeight >= 0.88:
        return this.setState({ showBackToTop: false });
      case width > 1000 && width <= 1200 && scrollTop / windowHeight >= 0.8:
        return this.setState({ showBackToTop: false });
      case width > 1200 && scrollTop / windowHeight >= 0.78:
        return this.setState({ showBackToTop: false });
      case scrollTop > 250:
        return this.setState({ showBackToTop: true });
      default:
        return this.setState({ showBackToTop: false });
    }
  }
  componentDidMount = (props) => {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  };
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  };

  toTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <button
        onClick={this.toTop}
        tabIndex="0"
        css={css`
          width: 50px;
          height: 50px;
          position: fixed;
          z-index: 1500;
          right: 10px;
          bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          outline: none;
          border: none;
          transition: all 0.3s ease 0s;
          background-color: ${this.state.bgColor};
          box-shadow: 0 0px 5px rgba(0, 0, 0, 0.6);
          visibility: ${this.state.showBackToTop ? 'visible' : 'hidden'};
          opacity: ${this.state.showBackToTop ? 1 : 0};
          &:hover {
            background-color: #bada55;
            cursor: pointer;
          }
        `}
      >
        <Chevron bgColor="white" width="40" />
      </button>
    );
  }
}

export default BackToTop;
