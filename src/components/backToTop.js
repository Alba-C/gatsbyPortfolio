import React, { Component } from 'react'
import { css } from 'react-emotion'

class BackToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchor: '/#',
      bgColor: 'rgb(189, 59, 36)',
      arrowColor: 'white',
      showBackToTop: false,
    }
  }

  handleScroll(event) {
    const scrollTop = event.currentTarget.pageYOffset
    const windowHeight = document.documentElement.getBoundingClientRect().height
    const width = window.innerWidth
    switch (true) {
      case width <= 400 && scrollTop / windowHeight >= 0.94:
        return this.setState({ showBackToTop: false })
      case width > 400 && width <= 600 && scrollTop / windowHeight >= 0.9:
        return this.setState({ showBackToTop: false })
      case width > 600 && width <= 1000 && scrollTop / windowHeight >= 0.88:
        return this.setState({ showBackToTop: false })
      case width > 1000 && width <= 1200 && scrollTop / windowHeight >= 0.8:
        return this.setState({ showBackToTop: false })
      case width > 1200 && scrollTop / windowHeight >= 0.78:
        return this.setState({ showBackToTop: false })
      case scrollTop > 250:
        return this.setState({ showBackToTop: true })
      default:
        return this.setState({ showBackToTop: false })
    }
  }
  componentDidMount = props => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll')
  }

  render() {
    return (
      <a href={this.state.anchor}>
        <div
          className={css`
            width: 50px;
            height: 50px;
            position: fixed;
            right: 10px;
            bottom: 20px;
            display: flex;
            align-items: center;
            border-radius: 5px;
            transition: all 0.3s ease 0s;
            background-color: ${this.state.bgColor};
            visibility: ${this.state.showBackToTop ? 'visible' : 'hidden'};
            opacity: ${this.state.showBackToTop ? 1 : 0};
          `}
        >
          <div
            className={css`
              background-color: ${this.state.arrowColor};
              height: 50%;
              width: 75%;
              margin: 0px auto;
              box-shadow: 0px 0px 14px 10px rgba(20, 20, 20, 0.1);
              border-radius: 5px;
              -webkit-clip-path: polygon(
                0% 50%,
                50% 0%,
                100% 50%,
                100% 100%,
                50% 50%,
                0% 100%
              );
              clip-path: polygon(
                0% 50%,
                50% 0%,
                100% 50%,
                100% 100%,
                50% 50%,
                0% 100%
              );
            `}
          />
        </div>{' '}
      </a>
    )
  }
}

export default BackToTop
