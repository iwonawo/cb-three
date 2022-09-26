import React from 'react'
import { FiMenu } from 'react-icons/fi'
import {
  ImHome,
  ImStack,
  ImFileText2,
  ImBubbles4,
  ImSvg,
  ImArrowUpRight,
  ImCogs
} from 'react-icons/im'

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
                  <ImHome />
                </span>
                Home
              </button>
            </li>
            <li>
              <button className="active">
                <span>
                  <ImSvg />
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
                  <ImSvg />
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
                  <ImSvg />
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
                    <ImSvg />
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
                <img src="" alt="user" />
              </div>
              <div className="data">
                <p>Frankie Sullivan</p>
                <p>@frankie</p>
              </div>
              <div className="icon">
                <ImArrowUpRight />
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
