import React, { Fragment, useContext, useEffect } from 'react'
import BubbleContext from '../../context/bubble/bubbleContext';
import BubbleItem from './BubbleItem.component';
import BubbleSearch from './BubbleSearch.component';

const BubbleList = () => {
  const bubbleContext = useContext(BubbleContext);
  // destructure bubbleContext
  const { bubbles, filtered, loading, fetchBubbles } = bubbleContext;

  useEffect(() => {
    fetchBubbles()
    // eslint-disable-next-line
  }, [])

  if (bubbles === null) {
    return <h4>No Bubbles Were Ever made </h4>
  }
  return (
    <div>
      {loading ? <p>Loading...</p> : (<Fragment>
        <BubbleSearch />
        {filtered !== null ? filtered.map(
          bubble => <BubbleItem key={bubble._id} bubble={bubble} />)
          :
          bubbles.map(bubble => <BubbleItem key={bubble._id} bubble={bubble} />)
        }
      </Fragment>)}
    </div>
  )
}

export default BubbleList

// {filtered !== null ? filtered.map(
//   bubble => <BubbleItem key={bubble._id} bubble={bubble} />)
//   :
//   bubbles.map(bubble => <BubbleItem key={bubble._id} bubble={bubble} />)
// }