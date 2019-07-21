import React from 'react'

const BubbleItem = (prop) => {
  return (
    <div>
      <h4>{prop.bubble.id}</h4>
      <p>{prop.bubble.message}</p>
    </div>
  )
}

export default BubbleItem
