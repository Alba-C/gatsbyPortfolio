import React, { Component } from 'react'
import { css } from '@emotion/react'
// import { navigateTo } from "gatsby-link";
import navigateTo from 'gatsby-link'
import ReCAPTCHA from 'react-google-recaptcha'

// const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = (value) => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  form = css({
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
  render() {
    return (
      <section
        css={css`
          background-color: #c0e0de;
        `}
      >
        <div
          css={css`
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
            css={css`
              text-align: center;
            `}
          >
            Contact Me
          </h2>
          <p
            css={css`
              text-align: center;
              font-weight: bold;
            `}
          >
            Do you want to hire me? Need a consultation on a new project?
          </p>
          <p>
            Perhaps, you need assistance moving a large sum of money
            internationally and require someone who won't ask a lot of
            questions. ¯\_(ツ)_/¯ Whatever the reason, don't be shy. I'd love to
            hear from you.
          </p>
          <form
            name="contactForm"
            method="POST"
            action="/formSuccess"
            data-netlify="true"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={this.handleSubmit}
            css={css`
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
            <input
              type="hidden"
              name="contactForm"
              value="contactForm"
              onChange={this.handleChange}
            />
            <p
              css={css`
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
                css={css`
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
                onChange={this.handleChange}
                css={css`
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
              css={css`
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
                css={css`
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
                onChange={this.handleChange}
                css={css`
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
              css={css`
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
                css={css`
                  width: 115px;
                `}
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Let me know how I can help!"
                onChange={this.handleChange}
                css={css`
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
              css={css`
                visibility: hidden;
                position: absolute;
              `}
            >
              <label htmlFor="bot-field">
                Don’t fill this out if you're human:{' '}
                <input name="bot-field" id="bot-field" />
              </label>
            </p>

            <div
              css={css`
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                @media (max-width: 535px) {
                  justify-content: flex-start;
                }
              `}
            >
              <span
                css={css`
                  width: 115px;

                  @media (max-width: 564px) {
                    display: none;
                  }
                `}
              />
              <span
                css={css`
                  width: 70%;
                  margin-left: 15px;
                  border-radius: 5px;
                  @media (max-width: 535px) {
                    width: 90%;
                    margin-left: 0;
                  }
                `}
              >
                <ReCAPTCHA
                  ref="recaptcha"
                  sitekey="6LdSXHoUAAAAAEtEK_b6AMI8gXK2sLNLZRVqWTNh"
                  onChange={this.handleRecaptcha}
                />
              </span>
            </div>

            <p
              css={css`
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                @media (max-width: 535px) {
                  justify-content: flex-start;
                }
              `}
            >
              <span
                css={css`
                  width: 70%;
                  @media (max-width: 564px) {
                    display: none;
                  }
                `}
              />

              <button
                type="submit"
                css={css`
                  margin-top: 15px;
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
}
