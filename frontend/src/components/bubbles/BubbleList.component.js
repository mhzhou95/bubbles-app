import React, { useContext } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';
import BubbleItem from './BubbleItem.component';
import BubbleSearch from './BubbleSearch.component';

const BubbleList = () => {
  const bubbleContext = useContext(BubbleContext);
  // destructure bubbleContext
  const { bubbles, filtered } = bubbleContext;

  if (bubbles.length === 0) {
    return <h4>No Bubbles Were Ever made </h4>
  }
  return (
    <div>
      <BubbleSearch />
      {filtered !== null ? filtered.map(
        bubble => <BubbleItem key={bubble.id} bubble={bubble} />)
        :
        bubbles.map(bubble => <BubbleItem key={bubble.id} bubble={bubble} />)
      }
    </div>
  )
}

export default BubbleList
