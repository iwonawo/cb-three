import React from 'react'
import {
  FiMenu,
  FiBell,
  FiAirplay,
  FiUsers,
  FiEdit,
  FiHome,
  FiExternalLink
} from 'react-icons/fi'
import { ImStack, ImFileText2, ImBubbles4, ImCogs } from 'react-icons/im'

import './MainNav.scss'

const MainNav = () => {
  return (
    <div className="MainNav">
      <span className="logo">Store</span>
      <div className="ondesktop">
        <div className="main-nav-wrapper">
          <ul>
            <li>
              <button>
                <span>
                  <FiHome />
                </span>
                Home
              </button>
            </li>
            <li>
              <button className="active">
                <span>
                  <FiAirplay />
                </span>
                Dashboard
              </button>
            </li>
            <li>
              <button>
                <span>
                  <ImStack />
                </span>
                Projects
              </button>
            </li>
            <li>
              <button>
                <span>
                  <FiEdit />
                </span>
                Tasks <span className="count">10</span>
              </button>
            </li>
            <li>
              <button>
                <span>
                  <ImFileText2 />
                </span>
                Reporting
              </button>
            </li>
            <li>
              <button>
                <span>
                  <FiUsers />
                </span>
                Users
              </button>
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <button>
                  <span>
                    <FiBell />
                  </span>
                  Notifications
                </button>
              </li>
              <li>
                <button>
                  <span>
                    <ImBubbles4 />
                  </span>
                  Support <span className="count">4</span>
                </button>
              </li>
              <li>
                <button>
                  <span>
                    <ImCogs />
                  </span>
                  Settings
                </button>
              </li>
            </ul>
            <div className="user-info">
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="user"
                />
              </div>
              <div className="data">
                <p>Frankie Sullivan</p>
                <p>@frankie</p>
              </div>
              <div className="icon">
                <FiExternalLink />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="onmobile">
        <FiMenu />
      </div>
    </div>
  )
}

export default MainNav
