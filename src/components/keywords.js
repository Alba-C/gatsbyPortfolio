import React from 'react'
import { css } from 'react-emotion'

const Keywords = props => {
  return (
    <section>
      <ul
        id="keyList"
        className={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 10px;
          list-style: none;
          background-color: #78a1bb;
          background-color: #c0e0de;
          font-family: 'Montserrat', sans-serif;
        `}
      >
        {props.keywords.map((
          key // <li key={key}>
        ) => (
          <button
            key={key} // href="#"
            onClick={props.keywordClick}
            className={css`
              background-color: #bada55;
              color: rgb(69, 69, 69);
              display: inline-block;
              /* text-transform: uppercase; */
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
            `}
            style={{
              color: props.filterWord === key && '#555',
              backgroundColor: props.filterWord === key && '#82D8D8',
            }}
          >
            {key}
          </button>
        ))
        // </li>
        }
      </ul>
    </section>
  )
}

export default Keywords
