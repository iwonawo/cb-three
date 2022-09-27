import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.scss'

const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li>
          <NavLink to="/" exact={true} end>
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/table">Table</NavLink>
        </li>
        <li>
          <NavLink to="/list-view">List View</NavLink>
        </li>
        <li>
          <NavLink to="/segment">Segment</NavLink>
        </li>
        <li>
          <NavLink to="/custom">Custom</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
