import { Component } from 'react';
import { jsx } from '@emotion/react';
import { Link, withPrefix } from 'gatsby';
/** @jsx jsx */

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
    const topnav = {
      fontSize: '1.25rem',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      zIndex: 999,
      display: 'flex',
      transition: 'height 0.2s ease-in-out',
      '@media (max-width: 768px)': {
        position: 'fixed',
        flexDirection: 'column',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#002851',
        height: 60,
        overflow: 'visible'
      }
    };

    const navBrand = {
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
        color: this.state.collapsed ? 'inherit' : '#bada55',
        borderBottom: this.state.collapsed ? 'none' : '3px solid #bada55'
      },
      '@media (max-width: 768px)': {
        margin: 'auto',
        position: 'absolute',
        top: 10,
        padding: 0,
        marginLeft: 5,
        height: 45,
        width: 45
      }
    };

    const logo = {
      marginBottom: 0,
      height: 'auto',
      maxHeight: '60px',
      width: 'auto'
    };

    const linkContainer = {
      maxWidth: 1000,
      margin: '12px auto',
      height: '100%',
      paddingRight: 88,
      transition: 'all 0.3s ease-in-out',
      '@media (max-width: 768px)': {
        backgroundColor: '#002851',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: 60,
        margin: '0 0 0 auto',
        width: 400,
        maxWidth: '70%',
        transform: this.state.collapsed ? 'translateX(400px)' : 'translateX(0)'
      }
    };

    const menuBtn = {
      float: 'right',
      padding: '10px 10px',
      textDecoration: 'none',
      display: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      '&:hover': {},
      '@media (max-width: 768px)': {
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0
      }
    };

    const topnavA = {
      float: 'left',
      display: 'block',
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out',
      borderBottom: '3px solid transparent',
      '&:hover': {
        textDecoration: 'none',
        color: '#bada55',
        borderColor: '#bada55',
        fontWeight: 'bold'
      },
      '@media (max-width: 768px)': {
        float: 'none',
        textAlign: 'left'
      }
    };

    return (
      <nav css={topnav} id="myTopnav">
        <Link to="/" onClick={this.closeMenu} css={navBrand}>
          <img src={withPrefix('assets/images/CA-Logo.png')} alt="logo" css={logo} />
        </Link>
        <div css={linkContainer}>
          <a href="/#projects" css={topnavA} onClick={this.closeMenu}>
            Projects
          </a>
          <a href="/#about" css={topnavA} onClick={this.closeMenu}>
            About
          </a>
          <a href="/#contact" css={topnavA} onClick={this.closeMenu}>
            Contact
          </a>
          <Link to="/resume" css={topnavA} onClick={this.closeMenu}>
            Resume
          </Link>
        </div>
        <button css={menuBtn} aria-label="menu toggle" onClick={this.handleClick}>
          <Hamburger collapsed={this.state.collapsed} size={40} lineColor={'white'} />
        </button>
      </nav>
    );
  }
}

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.collapsed
    };
  }

  background = this.props.background;
  lineColor = this.props.lineColor;
  size = this.props.size;

  // use this to get the button click from the navBar component
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.collapsed !== prevState.collapsed) {
      return { collapsed: nextProps.collapsed };
    } else return null;
  }

  render() {
    const menu = {
      height: this.size,
      width: this.size,
      backgroundColor: this.background,
      border: `solid 1px ${this.lineColor}`,
      borderRadius: this.state.collapsed ? '10%' : '50%',
      position: 'relative',
      transition: 'border-radius .3s ease-in'
    };

    const lineTop = {
      position: 'absolute',
      backgroundColor: this.lineColor,
      // backgroundColor: 'limegreen',
      margin: '0 10%',
      top: this.state.collapsed ? '15%' : `50%`,
      height: 2,
      width: '80%',
      transformOrigin: 'left',
      transform: this.state.collapsed ? 'rotate(0deg)' : 'translate(5px , -12px) rotate(45deg)',
      transition: 'transform .3s ease-in, top .3s ease-in'
    };

    const lineMid = {
      position: 'absolute',
      margin: '0 10%',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: this.lineColor,
      height: 2,
      transformOrigin: 'right',
      width: this.state.collapsed ? '80%' : 0
      // transition: 'width .4s ease-in .1s',
    };

    const lineLast = {
      position: 'absolute',
      backgroundColor: this.lineColor,
      height: 2,
      margin: '0 10%',
      bottom: '15%',
      width: '80%',
      transformOrigin: 'left',
      transform: this.state.collapsed ? 'rotate(0deg)' : 'translate(5px , -2px) rotate(-45deg)',
      transition: 'transform .3s ease-in, top .3s ease-in'
    };
    return (
      <div css={menu}>
        <div css={lineTop} />
        <div css={lineMid} />
        <div css={lineLast} />
      </div>
    );
  }
}

export default Navbar;
