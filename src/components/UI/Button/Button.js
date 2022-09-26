import React from 'react'

import './Button.scss'

const Button = props => {
  return (
    <button
      type={props.type || 'button'}
      className={`Button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
