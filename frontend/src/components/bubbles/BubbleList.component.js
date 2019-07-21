import React, { useContext } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';
import BubbleItem from './BubbleItem.component';

const BubbleList = () => {
  const bubbleContext = useContext(BubbleContext);

  return (
    <div>
      {bubbleContext.bubbles.map(bubble => <BubbleItem key={bubble.id} bubble={bubble} />)}
    </div>
  )
}

export default BubbleList
