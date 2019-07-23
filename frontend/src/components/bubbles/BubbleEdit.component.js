import React, { useContext, useState } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';

const BubbleEdit = (props) => {
  const bubbleContext = useContext(BubbleContext);
  const param = window.location.pathname.substring(8);
  const getBubble = bubbleContext.bubbles.filter(bubble => bubble._id.toString() === param);
  const [bubble, setBubble] = useState({
    _id: getBubble[0]._id,
    message: getBubble[0].message,
    upvotes: getBubble[0].upvotes
  });
  const { message } = bubble;

  const onChange = e => {
    setBubble({ ...bubble, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault();
    await bubbleContext.updateBubble(bubble);
    props.history.push('/')
  }
  return (
    <div className="edit-form">
      <form onSubmit={onSubmit}>
        <h3 className="form-items">Edit Bubble</h3>
        <input className="form-items" type="text" placeholder="text" name="message" value={message} onChange={onChange} />
        <input className="form-submit-button" type="submit" value="edit" />
      </form>
    </div>
  )
}

export default BubbleEdit
