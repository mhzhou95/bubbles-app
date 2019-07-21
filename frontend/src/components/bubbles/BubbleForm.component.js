import React, { useState, useContext } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';

const BubbleForm = () => {
  const bubbleContext = useContext(BubbleContext);

  const [bubble, setBubble] = useState({
    message: ''
  });
  const { message } = bubble;

  const onChange = e => {
    setBubble({ ...bubble, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault();
    bubbleContext.addBubble(bubble);
    setBubble({
      message: ''
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <h3>Create Bubble</h3>
      <input type="text" placeholder="text" name="message" value={message} onChange={onChange} />
      <input type="submit" value="create" />
    </form>
  )
}

export default BubbleForm
