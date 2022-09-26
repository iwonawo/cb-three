import React from 'react'
import { BsSearch } from 'react-icons/bs'

import './Search.scss'

const Search = props => {
  return (
    <form className="Search">
      <label htmlFor="search">
        <BsSearch />
      </label>
      <input type="search" placeholder="Search..." name="search" />
    </form>
  )
}

export default Search
