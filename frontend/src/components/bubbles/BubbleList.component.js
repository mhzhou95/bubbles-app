import React, { useContext } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';
import Bubble from './BubbleItem.component';

const BubbleList = () => {
  const bubbleContext = useContext(BubbleContext);

  return (
    <div>
      {bubbleContext.bubbles.map(bubble => <Bubble bubble={bubble} />)}
    </div>
  )
}

export default BubbleList
