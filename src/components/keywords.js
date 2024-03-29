import React from 'react'
import { css } from '@emotion/react'

const Keywords = (props) => {
  return (
    <section
      css={css`
        background-color: #c0e0de;
        padding: 20px 10px;
      `}
    >
      <div
        id="keyList"
        css={css`
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px;
          list-style: none;
          background-color: #78a1bb;
          background-color: #c0e0de;
          font-family: 'Montserrat', sans-serif;
        `}
      >
        {props.keywords.map((key) => (
          <button
            key={key}
            onClick={props.keywordClick}
            css={css`
              background-color: #bada55;
              color: rgb(69, 69, 69);
              display: inline-block;
              font-size: 1rem;
              font-weight: 800;
              margin-bottom: 5px;
              margin-right: 10px;
              border-radius: 5px;
              padding: 5px 10px;
              transition: all 0.3s ease 0s;
              text-decoration: none;
              box-shadow: 0px 1px 1px 0 rgba(69, 69, 69, 0.439);
              cursor: pointer;
              &:hover {
                background-color: #82d8d8;
                text-decoration: none;
                color: rgb(69, 69, 69);
                font-weight: bold;
              }
              &:active {
                background-color: #82d8d8;
                box-shadow: inset 0 0 5px rgba(0,0,0, 0.3)
              }
            `}
            style={{
              color: props.filterWord === key && '#555',
              backgroundColor: props.filterWord === key && '#82D8D8',
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Keywords
