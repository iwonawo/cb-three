import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const User = () => {
  return (
    <tr>
      <td>
        <label className="checkbox-container">
          <input type="checkbox" defaultChecked />
          <span>Company</span>
        </label>
      </td>
      <td>Status</td>
      <td>About</td>
      <td>Users</td>
      <td>License Use</td>
      <td>
        <button>
          <RiDeleteBin6Line />{' '}
        </button>
        <button>
          <FiEdit2 />
        </button>
      </td>
    </tr>
  )
}

export default User
