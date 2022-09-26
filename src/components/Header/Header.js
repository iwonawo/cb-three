import React from 'react'
import Button from '../UI/Button/Button'
import { IoIosCloudUpload } from 'react-icons/io'
import { BsPlusLg } from 'react-icons/bs'

import './Header.scss'

const Header = () => {
  return (
    <div className="Header">
      <h1>Customers</h1>
      <div className="actions">
        <Button>
          <span>
            <IoIosCloudUpload />
          </span>
          Import
        </Button>
        <Button className="Button--blue m-l-12">
          <span>
            <BsPlusLg />
          </span>
          Add Customer
        </Button>
      </div>
    </div>
  )
}

export default Header
