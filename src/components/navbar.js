import React, { Component } from 'react'
import { css } from 'emotion'
import { Link, withPrefix } from 'gatsby'
//import Hamburger from '/src/components/hamburger'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  closeMenu = () => {
    this.setState({ collapsed: true })
  }

  updateDimensions() {
    if (window.innerWidth > 600) {
      this.setState({ collapsed: true })
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    const topnav = css({
      fontSize: '1.25rem',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      // boxShadow: '0 0 10px 0 black',
      zIndex: 999,
      display: 'flex',
      '@media (max-width: 600px)': {
        display: 'block',
      },
    })

    const navBrand = css({
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      // fontSize: '17px',
      '&:hover': {
        textDecoration: 'none',
        color: this.state.collapsed ? 'inherit' : '#bada55',
        borderBottom: this.state.collapsed ? 'none' : '3px solid #bada55',
      },
      '@media (max-width: 600px)': {
        display: this.state.collapsed ? 'none' : 'block',
        margin: 'auto',
        textAlign: 'left',
      },
    })

    const linkContainer = css({
      maxWidth: 1000,
      margin: '12px auto',
      height: '100%',
      paddingRight: 88,
    })

    const menuBtn = css({
      float: 'right',
      padding: '10px 10px',
      textDecoration: 'none',
      display: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        // backgroundColor: '#ddd',
      },
      '@media (max-width: 600px)': {
        display: 'block',
        position: this.state.collapsed ? 'relative' : 'absolute',
        top: 0,
        right: 0,
        // // alignSelf: 'flex-end',
        // // justifySelf: 'flex-start',
      },
    })

    const topnavA = css({
      float: 'left',
      display: 'block',
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      // fontSize: '17px',
      '&:hover': {
        // backgroundColor: '#ddd',
        textDecoration: 'none',
        color: '#bada55',
        borderBottom: '3px solid #bada55',
        fontWeight: 'bold',
      },
      '@media (max-width: 600px)': {
        display: this.state.collapsed ? 'none' : 'block',
        float: 'none',
        textAlign: 'left',
      },
    })

    return (
      <nav>
        <div className={topnav} id="myTopnav">
          <Link to="/" onClick={this.closeMenu} className={navBrand}>
            {this.state.collapsed ? (
              <img
                src={withPrefix('/static/assets/CA-Logo.png')}
                alt="logo"
                className={css`
                  margin-bottom: 0;
                  height: 60px;
                  /* width: 60px; */
                `}
              />
            ) : (
              'Home'
            )}
          </Link>
          <div className={linkContainer}>
            <a href="/#projects" className={topnavA} onClick={this.closeMenu}>
             Projects
            </a>
            <a href="/#about" className={topnavA} onClick={this.closeMenu}>
              About
            </a>
            <a href="/#contact" className={topnavA} onClick={this.closeMenu}>
              Contact
            </a>
            <Link to="/resume" className={topnavA} onClick={this.closeMenu}>
              Resume
            </Link>
          </div>
          <button
            className={menuBtn}
            aria-label="menu toggle"
            onClick={this.handleClick}
          >
            <Hamburger
              collapsed={this.state.collapsed}
              size={40}
              lineColor={'white'}
            />
          </button>
        </div>
      </nav>
    )
  }
}

class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.collapsed,
    }
  }

  background = this.props.background
  lineColor = this.props.lineColor
  size = this.props.size

  // used to simulate a click from an outer component
  // handleClick = () => {
  //   this.setState({ collapsed: !this.state.collapsed })
  // }
  // use this to get the button click from the navBar component
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.collapsed !== prevState.collapsed) {
      return { collapsed: nextProps.collapsed }
    } else return null
  }

  render() {
    const menu = css({
      height: this.size,
      width: this.size,
      backgroundColor: this.background,
      border: `solid 1px ${this.lineColor}`,
      borderRadius: this.state.collapsed ? '10%' : '50%',
      position: 'relative',
      transition: 'border-radius .5s ease-in',
    })

    const lineTop = css({
      position: 'absolute',
      backgroundColor: this.lineColor,
      margin: '0 10%',
      top: this.state.collapsed ? `${this.size / 4}` : `${this.size / 2}`,
      height: 2,
      width: '80%',
      transform: this.state.collapsed ? 'rotate(0deg)' : ' rotate(135deg)',
      transition: 'transform .5s ease-in, top .5s ease-in',
    })

    const lineMid = css({
      position: 'absolute',
      margin: '0 10%',
      top: `${this.size / 2}`,
      backgroundColor: this.lineColor,
      height: 2,
      width: this.state.collapsed ? '80%' : 0,
      transition: 'width .4s ease-in .1s',
    })

    const lineLast = css({
      position: 'absolute',
      backgroundColor: this.lineColor,
      height: 2,
      margin: '0 10%',
      top: this.state.collapsed ? `${(this.size / 4) * 3}` : `${this.size / 2}`,
      width: '80%',
      transform: this.state.collapsed ? 'rotate(0deg)' : ' rotate(-135deg)',
      transition: 'transform .5s ease-in, top .5s ease-in',
    })
    return (
      <div className={menu}>
        <div className={lineTop} />
        <div className={lineMid} />
        <div className={lineLast} />
      </div>
    )
  }
}

export default Navbar
