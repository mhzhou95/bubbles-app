import React, { useContext } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';

const BubbleItem = (prop) => {
  const bubbleContext = useContext(BubbleContext)

  const onDelete = () => {
    bubbleContext.deleteBubble(prop.bubble.id);
  }
  return (
    <div>
      <h4>{prop.bubble.id}</h4>
      <p>{prop.bubble.message}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default BubbleItem
