import React, { useContext, useRef } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';

const BubbleSearch = () => {
  const text = useRef('');
  const bubbleContext = useContext(BubbleContext);

  const onChange = (e) => {

    if (text.current.value !== '') {
      bubbleContext.filterBubbles(e.target.value);
      console.log(e.target.value)
    } else {
      bubbleContext.clearFilter();
    }
  }

  return (
    <div>
      <form>
        <input ref={text} type="text" placeholder="search bubbles" onChange={onChange} />
      </form>
    </div>
  )
}

export default BubbleSearch
