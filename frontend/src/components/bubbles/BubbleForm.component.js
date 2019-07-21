import React, { useState } from 'react'

const BubbleForm = () => {
  const [bubble, setBubble] = useState({
    message: ''
  });
  const { message } = bubble;

  const onChange = e => {
    setBubble({ ...bubble, [e.target.name]: e.target.value })
  }
  return (
    <form>
      <h3>Create Bubble</h3>
      <input type="text" placeholder="text" name="message" value={message} onChange={onChange} />
      <input type="submit" value="create" />
    </form>
  )
}

export default BubbleForm
