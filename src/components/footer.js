import React from 'react';
import { withPrefix } from 'gatsby';
import { css } from '@emotion/react';

// Components
import Chevron from '../components/chevron';

const footer = () => {
  const footerStyles = css`
    background-color: #002851;
    color: #ffffff;
    width: 100%;

    .footer__container {
      position: relative;
      height: 160px;
      margin: 0 auto;
      max-width: 1200px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
    }

    .footer__chevron-container {
      position: absolute;
      bottom: 90px;
      display: flex;
      justify-content: center;
      align-items: flex-start;

      width: 150px;
      border-radius: 50%;
      background-color: #002851;
      transition: all 0.3s ease 0s;

      &:hover {
        transform: translateY(2px);
        cursor: pointer;
      }
    }

    .footer__icon-container {
      display: flex;
      justify-content: space-between;
      position: relative;

      z-index: 100;
      width: 400px;
      max-width: 1000px;
      top: 10px;
      @media (max-width: 768px) {
        width: 70%;
      }
    }

    .footer__link {
      height: 30px;
      width: 30px;
    }

    .footer__icon {
      width: 30px;
      height: 30px;
      transition: all 0.3s ease 0s;
      &:hover {
        transform: scale(1.1);
      }
    }

    .footer__icon--mail {
      padding: 3px;
      background-color: white;
      border-radius: 50%;
    }

    .footer__copyright {
      font-size: 0.9rem;
      margin: 30px 0 0 0;
      align-self: flex-start;
    }
  `;

  return (
    <footer css={footerStyles}>
      <div className="footer__container">
        <div className="footer__chevron-container" role="button" aria-hidden="true" tabIndex="0" onClick={() => window.scroll(0, 0)} aria-label="return to top">
          <Chevron bgColor="#bada55" width="100" />
        </div>
        <div className="footer__icon-container">
          <a className="footer__link" href="https://github.com/Alba-c" target="_blank" rel="noopener noreferrer">
            <img className="footer__icon" src={withPrefix('assets/icons/GitHub-Mark-Light-64px.png')} alt="github logo" />
          </a>
          <a className="footer__link" href="https://codepen.io/Alba-C/" target="_blank" rel="noopener noreferrer">
            <img className="footer__icon" src={withPrefix('assets/icons/codepenlogo.png')} alt="codepen logo" />
          </a>
          <a className="footer__link" href="mailto:christopher@cafere.com">
            <img className="footer__icon footer__icon--mail" src={withPrefix('assets/icons/email.png')} alt="mail icon" />
          </a>
        </div>
        <p className="footer__copyright">© Chris Albanse 2021</p>
      </div>
    </footer>
  );
};

export default footer;
