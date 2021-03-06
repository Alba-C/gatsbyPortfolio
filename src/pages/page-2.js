import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Chevron from '../components/chevron'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
      <path
        fill="#bada44"
        d="M 12 8 L 2 13 L 2 17 L 12 12 L 22 17 L 22 13 L 12 8 z"
      />
    </svg>
    <Chevron bgColor="white" width="10" />
  </Layout>
)

export default SecondPage
