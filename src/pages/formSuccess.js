import React from 'react'
import Layout from '../components/layout'
import { css } from 'react-emotion'

const FormSuccess = () => (
  <Layout>
    <section
      className={css`
        background-color: #f1f7ed;
        text-align: center;
        color: black;
        height: 83vh;
        padding: 50px;
      `}
    >
      <h1>Thank You, Your message was sent</h1>
      <a href="/">
      back to home
      </a>

      

     
    </section>
  </Layout>
)

export default FormSuccess;
