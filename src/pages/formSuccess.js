import React from 'react'
import Layout from '../components/layout'
import { css } from 'react-emotion'

const FormSuccess = () => (
  <Layout>
    <section
      className={css`
        background-color: #f1f7ed;
        text-align: center;
        color: #002851;
        height: 83vh;
        padding: 50px;
        background-image: url('/static/assets/pugInJacket.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        h1 {
          @media (max-width: 600px) {
           font-size: 1.5rem;
          }
        }
      `}
    >
      <h1>Thank You, Your message was sent.</h1>
      <a href="/">back to home</a>
    </section>
  </Layout>
)

export default FormSuccess;
