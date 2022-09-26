import React from 'react'

import './Users.scss'

import User from './User'
import Button from '../UI/Button/Button'

const Users = props => {
  return (
    <div className="Users">
      <table>
        <thead>
          <tr className="tablenav">
            <th>
              <label className="checkbox-container">
                <input type="checkbox" defaultChecked />
                <span>Company</span>
              </label>
            </th>
            <th>Status</th>
            <th>About</th>
            <th>Users</th>
            <th>License Use</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </tbody>
      </table>

      <div className="pagination">
        <Button>Previous</Button>
        <p>Page 1 of 10</p>
        <Button>Next</Button>
      </div>
    </div>
  )
}

export default Users
