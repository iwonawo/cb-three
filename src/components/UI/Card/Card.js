import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import './Card.scss'

const Card = props => {
  return (
    <div className="Card">
      <p className="title">{props.title}</p>
      <span className="total">{props.total}</span>
      <span className="more">
        <BiDotsVerticalRounded />
      </span>
      {props.percent && (
        <div className="percent">
          <span>
            <IoIosArrowRoundUp />
            {props.percent}%
          </span>
        </div>
      )}
      {props.usersCount && <div className="users">users images</div>}
    </div>
  )
}

export default Card
