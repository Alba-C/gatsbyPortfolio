import Layout from '../components/layout'
import { css, jsx } from '@emotion/react'
/** @jsx jsx */

import pug from '../../static/assets/images/pugInJacket.jpg'

const FormSuccess = () => (
  <Layout>
    <section
      css={css`
        background-color: #f1f7ed;
        text-align: center;
        color: #002851;
        height: 83vh;
        padding: 50px;
        background-image: ${`url(${pug})`};
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

export default FormSuccess
