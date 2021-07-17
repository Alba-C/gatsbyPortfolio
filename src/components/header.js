import React from 'react'
import { css } from '@emotion/react'
import Navbar from './navbar'

const Header = ({ siteTitle }) => (
    <header
      css={css`
        background-color: #002851;
        margin-bottom: 0;
        z-index: 1;
        font-family: Montserrat, Arial, Helvetica, sans-serif;
        font-weight: bolder;
        min-height: 60px;
      `}
    >
      <Navbar />
    </header>
)

export default Header
