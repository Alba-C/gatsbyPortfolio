import React from 'react'

const chevron = props => {
  return <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={props.width} heigth="auto" viewBox="0 0 24 24">
      <path fill={props.bgColor} d="M 12,7 2,13 v 6 l 10,-6 10,6 v -6 z" />
      </svg>
    </div>
}

export default chevron
