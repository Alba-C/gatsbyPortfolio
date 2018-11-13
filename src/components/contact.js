import React from 'react'
import { css } from 'emotion'

const form = css({
  fontSize: '1.25rem',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  boxShadow: '0 0 10px 0 black',
  zIndex: 999,
  display: 'flex',
  '@media (max-width: 600px)': {
    display: 'block',
  },
})

const Contact = () => {
  return (
    <section
      className={css`
        background-color: #c0e0de;
      `}
    >
      <div
        className={css`
          max-width: 1200px;
          margin: 0 auto;
          background-color: #c0e0de;
          font-size: 1.15em;
          display: flex;
          flex-direction: column;
          padding: 25px 50px 50px 50px;
        `}
        id="contact"
      >
        <h2
          className={css`
            text-align: center;
          `}
        >
          Contact Me
        </h2>
        <p
          className={css`
            text-align: center;
            font-weight: bold;
          `}
        >
          Do you want to hire me? Need a consultation on a new project?
        </p>
        <p>
          Perhaps, you need assistance moving a large sum of money
          internationally and require someone who won't ask a lot of questions.
          ¯\_(ツ)_/¯ Whatever the reason, don't be shy. I'd love to hear from
          you.
        </p>
        <form
          name="contactForm"
          method="POST"
          action="/formSuccess"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={css`
            font-size: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: stretch;
            background-color: #f1f7ed;
            padding: 30px;
            margin: 0 -15px;
            border-radius: 5px;
          `}
        >
          <input type="hidden" name="contactForm" value="contactForm" />
          <p
            className={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              @media (max-width: 535px) {
                justify-content: flex-start;
              }
            `}
          >
            <label
              htmlFor="name"
              className={css`
                width: 115px;
              `}
            >
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder=" your name"
              className={css`
                width: 70%;
                margin-left: 15px;
                border-radius: 5px;
                @media (max-width: 535px) {
                  width: 90%;
                  margin-left: 0;
                }
              `}
            />
          </p>
          <p
            className={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              @media (max-width: 535px) {
                justify-content: flex-start;
              }
            `}
          >
            <label
              htmlFor="email"
              className={css`
                width: 115px;
              `}
            >
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=" your@email.com"
              className={css`
                width: 70%;
                margin-left: 15px;
                border-radius: 5px;
                @media (max-width: 535px) {
                  width: 90%;
                  margin-left: 0;
                }
              `}
            />
          </p>

          <p
            className={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              @media (max-width: 535px) {
                justify-content: flex-start;
              }
            `}
          >
            <label
              htmlFor="message"
              className={css`
                width: 115px;
              `}
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let me know how I can help!"
              className={css`
                border-radius: 5px;
                margin-left: 15px;
                width: 70%;
                min-height: 10vw;
                @media (max-width: 535px) {
                  width: 90%;
                  height: 50vw;
                  margin-left: 0;
                }
              `}
            />
          </p>
          <p
            className={css`
              visibility: hidden;
              position: absolute;
            `}
          >
            <label htmlFor="bot-field">
              Don’t fill this out if you're human:{' '}
              <input name="bot-field" id="bot-field" />
            </label>
          </p>
          <p
            className={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              @media (max-width: 535px) {
                justify-content: flex-start;
              }
            `}
          >
            <span
              className={css`
                width: 70%;
                @media (max-width: 564px) {
                  display: none;
                }
              `}
            />
            <div netlify-recaptcha data-netlify-recaptcha />
            <button
              type="submit"
              className={css`
                width: 130px;
                border-radius: 5px;
                background-color: #bada55;
                color: rgb(69, 69, 69);
                font-size: 1rem;
                font-weight: 800;
                box-shadow: 0px 1px 1px 0 rgba(69, 69, 69, 0.439);
                cursor: pointer;
                transition: all 0.3s ease 0s;
                &:hover {
                  background-color: #82d8d8;
                }
                @media (max-width: 563px) {
                  /* width: 70%; */

                  /* margin: 0 auto; */
                }
              `}
            >
              Send It
            </button>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
