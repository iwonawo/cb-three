import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import './Card.scss'
import Images from '../Images/Images'

const Card = props => {
  const images = [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  ]

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
      {props.usersCount && (
        <div className="users">
          <Images images={images} />
        </div>
      )}
    </div>
  )
}

export default Card
