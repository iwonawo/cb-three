import React from 'react'

import './Wrapper.scss'

const Wrapper = props => {
  return <div className={`Wrapper ${props.className}`}>{props.children}</div>
}

export default Wrapper
