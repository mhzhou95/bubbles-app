import React from 'react'
import BubbleForm from './bubbles/BubbleForm.component';

const CreateBubble = (props) => {
  const onSubmit = () => {
    props.history.push('/')
  }
  return (
    <BubbleForm onSubmit={onSubmit} />
  )
}

export default CreateBubble
