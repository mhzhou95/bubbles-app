import React, { Fragment, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BubbleContext from '../../context/bubble/bubbleContext';
import AuthContext from '../../context/auth/authContext';

const BubbleItem = (props) => {
  const bubbleContext = useContext(BubbleContext);
  const authContext = useContext(AuthContext);

  let { bubble } = props;
  const { user, isAuthenticated } = authContext;
  const { updateBubble } = bubbleContext;
  const [upvotes, setUpvotes] = useState({
    _id: bubble._id,
    message: bubble.message,
    upvotes: bubble.upvotes
  });
  const editLink = `/bubble/${bubble._id}`;

  const handleUpVote = async () => {
    setUpvotes({
      _id: bubble._id,
      message: bubble.message,
      upvotes: upvotes.upvotes += 1
    })

    await updateBubble(upvotes);
    await bubbleContext;
  }

  const onDelete = () => {
    bubbleContext.deleteBubble(bubble._id);
  }
  return (
    <div>
      <h4>{bubble.username}</h4>
      <p>{bubble.message}</p>
      <p>{bubble.upvotes}</p>
      <button onClick={handleUpVote}>UpVote</button>
      {isAuthenticated && user._id === bubble.user &&
        <Fragment>
          <button onClick={onDelete}>Delete</button>  <Link to={editLink}>Edit</Link>
        </Fragment>}
    </div>
  )
}

export default BubbleItem

