import React, { Fragment, useState, useContext } from 'react'
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
  const [disabled, setDisabled] = useState(false);

  const editLink = `/bubble/${bubble._id}`;

  const handleUpVote = async () => {
    setUpvotes({
      _id: bubble._id,
      message: bubble.message,
      upvotes: upvotes.upvotes += 1
    })

    await updateBubble(upvotes);
    await bubbleContext;
    setDisabled(true);
  }

  const onDelete = () => {
    bubbleContext.deleteBubble(bubble._id);
  }
  return (
    <div className="bubble-item-container">
      <h2>{bubble.username} {' '}says:</h2>
      <p className="bubble-item-message">{bubble.message}</p>
      <p className="bubble-item-upvotes">upvotes: {bubble.upvotes} <button disabled={disabled} onClick={handleUpVote}><i className="fas fa-arrow-alt-circle-up"></i></button></p>
      {isAuthenticated && user._id === bubble.user &&
        <Fragment>
          <button onClick={onDelete}>Delete</button>  <button><Link className="bubble-item-link" to={editLink}>Edit</Link></button>
        </Fragment>}
    </div>
  )
}

export default BubbleItem

