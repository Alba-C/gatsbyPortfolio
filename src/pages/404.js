import React from 'react'
import Layout from '../components/layout'
import { css } from 'react-emotion'

const NotFoundPage = () => (
  <Layout>
    <section
      className={css`
        background-color: #f1f7ed;
        background: -webkit-radial-gradient(bottom, red, yellow, green);
        background: radial-gradient(at bottom, black, #f1f7ed);
        color: black;
        height: 83vh;
        padding: 50px;
      `}
    >
      <h1>Uh oh! You really did it this time!</h1>
      <h2>You looked for a page that doesn't exist.</h2>
      <h3>And got the Ol' 404 error!</h3>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <img
        src="/assets/spaceMan.png"
        alt=""
        className={css`
          margin: 0 auto;
        `}
      />
    </section>
  </Layout>
)

export default NotFoundPage
