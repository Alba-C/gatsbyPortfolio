import React from 'react';
import { css } from '@emotion/react';
import Chevron from '../components/chevron';
import { withPrefix } from 'gatsby';

const footer = () => {
  return (
    <footer
      css={css`
        background-color: #002851;
        color: #ffffff;
        width: 100%;
        padding: 20px;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          max-width: 1200px;
        `}
      >
        <div
          onClick={() => window.scroll(0, 0)}
          aria-label="return to top"
          role="button"
          aria-hidden="true"
          tabIndex="0"
          css={css`
            height: 100px;
            width: 150px;
            border-radius: 50%;
            background-color: #002851;
            position: relative;
            bottom: 40px;
            margin: 0 auto;
            transition: all 0.3s ease 0s;

            &:hover {
              transform: translateY(2px);
              cursor: pointer;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: flex-start;
              margin-top: -20px;
            `}
          >
            <Chevron
              bgColor="#bada55"
              width="100"
              css={css`
                margin-top: -10px;
              `}
            />
          </div>
        </div>
        <div
          css={css`
            max-width: 1000px;
            margin: 0 auto 20px;
            width: 400px;
            display: flex;
            justify-content: space-between;
            z-index: 100;
            position: relatie;
            @media (max-width: 600px) {
              width: 100%;
            }
          `}
        >
          <a href="https://codepen.io/Alba-C/" target="_blank" rel="noopener noreferrer">
            <img
              src={withPrefix('assets/icons/codepenlogo.png')}
              alt="codepen logo"
              css={css`
                height: 30px;
                width: 30px;
                transition: all 0.3s ease 0s;
                &:hover {
                  transform: scale(1.1);
                }
              `}
            />
          </a>
          <a href="https://github.com/Alba-c" target="_blank" rel="noopener noreferrer">
            <img
              src={withPrefix('assets/icons/GitHub-Mark-Light-64px.png')}
              alt="github logo"
              css={css`
                height: 30px;
                width: 30px;
                z-index: 1000;
                transition: all 0.3s ease 0s;
                &:hover {
                  transform: scale(1.1);
                }
              `}
            />
          </a>
          <a
            href="mailto:christopher@cafere.com"
            css={css`
              width: 30px;
              height: 30px;
              padding: 3px;
              background-color: white;
              border-radius: 50%;
              transition: all 0.3s ease 0s;
              &:hover {
                transform: scale(1.1);
              }
            `}
          >
            <img
              src={withPrefix('assets/icons/email.png')}
              alt="mail icon"
              css={css`
                border-radius: 50%;
                height: 24px;
                width: 24px;
              `}
            />
          </a>
        </div>
        <p
          css={css`
            font-size: 0.7rem;
            color: #e4e4e4;
            right: 100%;
            position: relative;
            text-align: center;
            margin: 0;
          `}
        >
          © Chris Albanse 2021
        </p>
      </div>
    </footer>
  );
};

export default footer;
