import React from 'react'
import { css } from 'react-emotion'

const BackToTop = props => {
  return (
    <a href={props.anchor}>
      <div
        className={css`
          width: 50px;
          height: 50px;
          position: fixed;
          right: 10px;
          bottom: 20px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          background-color: ${props.bgColor};
        `}
      >
        <div
          className={css`
            background-color: ${props.arrowColor};
            height: 50%;
            width: 75%;
            margin: 0px auto;
            box-shadow: 0px 0px 14px 10px rgba(20, 20, 20, 0.1);
            border-radius: 5px;
            -webkit-clip-path: polygon(
              0% 50%,
              50% 0%,
              100% 50%,
              100% 100%,
              50% 50%,
              0% 100%
            );
            clip-path: polygon(
              0% 50%,
              50% 0%,
              100% 50%,
              100% 100%,
              50% 50%,
              0% 100%
            );
          `}
        />
      </div>{' '}
    </a>
  )
}

export default BackToTop
