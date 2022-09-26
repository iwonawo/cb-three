import React from 'react'

import './Page.scss'

const Page = props => {
  return <div className={`Page ${props.className}`}>{props.children}</div>
}

export default Page
