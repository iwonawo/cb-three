import React from 'react'

import './Images.scss'

const Images = props => {
  const images = props.images
  const count = props.images.length

  return (
    <div className="Images">
      {images.slice(0, 4).map((img, index) => (
        <div key={index} className="img-wrapper">
          <img src={img} alt={index} />
        </div>
      ))}
      {count > 4 && (
        <div className="img-count">
          <span>+{count - 4}</span>
        </div>
      )}
    </div>
  )
}

export default Images
