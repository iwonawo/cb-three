import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import { IoIosCloudUpload } from 'react-icons/io'
import { BsPlusLg } from 'react-icons/bs'

import './Header.scss'
import Modal from '../Modal/Modal'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModalHandler = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      {modalOpen && (
        <Modal onConfirm={openModalHandler} title="Add New Customer"></Modal>
      )}
      <div className="Header">
        <h1>Customers</h1>
        <div className="actions">
          <Button>
            <span>
              <IoIosCloudUpload />
            </span>
            Import
          </Button>
          <Button className="Button--blue m-l-12" onClick={openModalHandler}>
            <span>
              <BsPlusLg />
            </span>
            Add Customer
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header
