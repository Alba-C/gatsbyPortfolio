import React from 'react'
import { css } from 'emotion';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
  <div>
    <nav
      className={css`
        background-color: #002851;
        margin-bottom: 0;
        z-index: 1;
      `}
    >
      <Navbar />
    </nav>
  </div>
)

export default Header


