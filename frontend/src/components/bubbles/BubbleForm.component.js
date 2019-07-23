import React, { useState, useContext } from 'react';
import BubbleContext from '../../context/bubble/bubbleContext';


const BubbleForm = (props) => {
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
    props.onSubmit()
  }
  return (
    <div className="bubble-form">
      <form onSubmit={onSubmit}>
        <h3 className="form-items" >Create Bubble</h3>
        <input className="form-items" type="text" placeholder="text" name="message" value={message} onChange={onChange} />
        <input className="form-submit-button" type="submit" value="create" />
      </form>
    </div>

  )
}

export default BubbleForm;
