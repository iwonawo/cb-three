import React from 'react'

import './Nav.scss'

const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li className="active">
          <a href="#.">Overview</a>
        </li>
        <li>
          <a href="#.">Table</a>
        </li>
        <li>
          <a href="#.">List View</a>
        </li>
        <li>
          <a href="#.">Segment</a>
        </li>
        <li>
          <a href="#.">Custom</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
