import React, { useState, useEffect } from 'react'

import './Users.scss'
import UsersJSON from './dataJSON'

import User from './User'
import Button from '../UI/Button/Button'

let data = UsersJSON

const Users = props => {
  const [usersList, setUsersList] = useState(data)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 800)
    return () => clearTimeout()
  }, [])

  //Delete user based on current id
  const onDeleteHandler = id => {
    setUsersList(current =>
      current.filter(item => {
        return item.id !== id
      })
    )
  }

  return (
    <div className="Users">
      {isLoaded ? (
        <>
          <table>
            <thead>
              <tr className="tablenav">
                <th>
                  <div className="checkbox-container">
                    {/* <div className="checkbox checkbox--active"></div> */}
                    <div className="checkbox-label">
                      <span>Company</span>
                    </div>
                  </div>
                </th>
                <th>Status</th>
                <th>About</th>
                <th>Users</th>
                <th>License Use</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, index) => (
                <User
                  key={index}
                  id={user.id}
                  company={user.company.name}
                  website={user.company.url}
                  status={user.status}
                  title={user.about.title}
                  desc={user.about.desc}
                  images={user.users}
                  usage={user.licenseuse}
                  onDelete={onDeleteHandler}
                />
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <Button>Previous</Button>
            <p>Page 1 of 10</p>
            <Button>Next</Button>
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  )
}

export default Users
