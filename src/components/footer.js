import React from 'react'
import { css } from 'react-emotion'
import Chevron from '../components/chevron'

const footer = () => {
  const linkContainer = css({
    maxWidth: 1000,
    margin: '-50px auto',
    padding: 20,
    width: 400,
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 100,

    '@media (max-width: 600px)': {
      width: '100%',
    },
  })

  return (
    <footer
      className={css`
        background-color: #002851;
        color: white;
        /* padding: 30px; */
        /* position: absolute; */
        width: 100%;
        bottom: 0;
      `}
    >
      <div
        className={css`
          margin: 0 auto;
          max-width: 1200px;
          padding-top: 0;
          /* z-index: 100; */
          /* box-shadow: 0px 2px 14px 10px rgba(20, 20, 20, 0.1); */
        `}
      >
        <div
          onClick={() => window.scroll(0, 0)}
          aria-label="return to top"
          className={css`
            height: 100px;
            width: 150px;
            border-radius: 50%;
            background-color: #002851;
            position: relative;
            bottom: 40px;
            margin: 0 auto;
            transition: all 0.3s ease 0s;
            /* display: flex;
            align-items: flex-start;
            justify-content: center; */
            &:hover {
              transform: translateY(2px);
            }
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: flex-start;
              margin-top: -20px;
            `}
          >
            <Chevron
              bgColor="#bada55"
              width="100"
              className={css`
                margin-top: -10px;
              `}
            />
          </div>

          {/* <div className={css`
              background-color: #bada55;
              height: 50px;
              width: 75px;
              margin: 0px auto;
              box-shadow: 0px 0px 14px 10px rgba(20, 20, 20, 0.1);
              border-radius: 5px;
              -webkit-clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 100% 100%, 50% 50%, 0% 100%);
              clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 100% 100%, 50% 50%, 0% 100%);`} /> */}
        </div>
        <div className={linkContainer}>
          <a
            href="https://codepen.io/Alba-C/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/codepenlogo.png"
              alt="codepen logo"
              className={css`
                height: 30px;
                width: 30px;
                transition: all 0.3s ease 0s;
                &:hover {
                  transform: scale(1.1);
                }
              `}
            />
          </a>
          <a
            href="https://github.com/Alba-c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/GitHub-Mark-Light-64px.png"
              alt="github logo"
              className={css`
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
            className={css`
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
              src="/icons/email.png"
              alt="mail icon"
              className={css`
                border-radius: 50%;
                height: 24px;
                width: 24px;
              `}
            />
          </a>
        </div>
        <p
          className={css`
            font-size: 0.7rem;
            color: #e4e4e4;
            float: right;
            padding-top: 20px;
            padding-right: 30px;
          `}
        >
          © Chris Albanse 2018
        </p>
      </div>
    </footer>
  )
}

export default footer
