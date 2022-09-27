import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Images from '../UI/Images/Images'
import Modal from '../Modal/Modal'

import './User.scss'

const User = props => {
  const [checked, setChecked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const checkedHandle = () => {
    setChecked(!checked)
  }

  const openModalHandler = () => {
    setModalOpen(!modalOpen)
  }

  const deleteHandler = () => {
    //lifting up
    const currentId = props.id
    props.onDelete(currentId)
  }

  return (
    <>
      {modalOpen && (
        <Modal
          onConfirm={openModalHandler}
          title="Customer Information"
          className="user-modal"
        >
          <ul>
            <li>
              <div className="cathegory">Company</div>
              <div>{props.company}</div>
            </li>
            <li>
              <div className="cathegory">Website</div>
              <div>{props.website}</div>
            </li>
            <li>
              <div className="cathegory">Status</div>
              <div>{props.status}</div>
            </li>
            <li>
              <div className="cathegory">About</div>
              <div className="displ-col">
                <span className="bold">{props.title}</span>
                <span>{props.desc}</span>
              </div>
            </li>
            <li>
              <div className="cathegory">Users</div>
              <div>
                <Images images={props.images} />
              </div>
            </li>
            <li>
              <div className="cathegory">License Use</div>
              <div className="usage-bar usage-bar--short">
                <span style={{ width: `${props.usage}%` }}></span>
              </div>
            </li>
          </ul>
        </Modal>
      )}
      <tr className="User">
        <td className="td-company" onClick={checkedHandle}>
          <div className="checkbox-container">
            <div
              className={'checkbox ' + (checked && 'checkbox--active')}
            ></div>
            <div className="checkbox-label">
              <span>{props.company}</span>
              <span>{props.website}</span>
            </div>
          </div>
        </td>
        <td className="td-status">
          <span
            className={
              'status ' +
              (props.status === 'Customer' ? 'status--customer' : '')
            }
          >
            {props.status}
          </span>
        </td>
        <td className="td-about">
          <div className="about">
            <span>{props.title}</span>
            <span>{props.desc}</span>
          </div>
        </td>
        <td className="td-users">
          <Images images={props.images} />
        </td>
        <td className="td-usage">
          <div className="usage-bar">
            <span style={{ width: `${props.usage}%` }}></span>
          </div>
        </td>
        <td className="td-buttons">
          <button onClick={deleteHandler}>
            <RiDeleteBin6Line />
          </button>
          <button onClick={openModalHandler}>
            <FiEdit2 />
          </button>
        </td>
      </tr>
    </>
  )
}

export default User
