import React, { useContext, useState } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';

const BubbleEdit = () => {
  const bubbleContext = useContext(BubbleContext);
  const param = window.location.pathname.substring(8);
  const getBubble = bubbleContext.bubbles.filter(bubble => bubble.id.toString() === param);

  const [bubble, setBubble] = useState({
    id: getBubble[0].id,
    message: getBubble[0].message
  });
  const { message } = bubble;

  const onChange = e => {
    setBubble({ ...bubble, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault();
    bubbleContext.updateBubble(bubble);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Edit Bubble</h3>
        <input type="text" placeholder="text" name="message" value={message} onChange={onChange} />
        <input type="submit" value="edit" />
      </form>
    </div>
  )
}

export default BubbleEdit
