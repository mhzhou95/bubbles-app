import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import BubbleContext from '../../context/bubble/bubbleContext';

const BubbleItem = (prop) => {
  const bubbleContext = useContext(BubbleContext)

  const onDelete = () => {
    bubbleContext.deleteBubble(prop.bubble.id);
  }
  const editLink = `/bubble/${prop.bubble.id}`
  return (
    <div>
      <h4><Link to={editLink}>{prop.bubble.id}</Link></h4>
      <p>{prop.bubble.message}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default BubbleItem
