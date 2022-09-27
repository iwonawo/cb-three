import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.scss'
import Button from '../UI/Button/Button'

const Backdrop = props => {
  return <div className="backdrop" onClick={props.onConfirm} />
}

const ModalOverlay = props => {
  return (
    <div className={`Modal ${props.className}`}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className="body">{props.children}</div>
      <div className="actions actions--end">
        <Button onClick={props.onConfirm} className="move-right">
          close
        </Button>
      </div>
    </div>
  )
}

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          className={props.className}
        >
          {props.children}
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default Modal
