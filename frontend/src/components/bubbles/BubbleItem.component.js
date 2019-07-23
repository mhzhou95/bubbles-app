import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import BubbleContext from '../../context/bubble/bubbleContext';
import AuthContext from '../../context/auth/authContext';

const BubbleItem = (props) => {
  const bubbleContext = useContext(BubbleContext);
  const authContext = useContext(AuthContext);

  const { bubble } = props;
  const { user, isAuthenticated } = authContext;

  const onDelete = () => {
    bubbleContext.deleteBubble(bubble._id);
  }
  const editLink = `/bubble/${bubble._id}`;

  return (
    <div>
      <h4>{bubble.username} {isAuthenticated && user._id === bubble.user && <Link to={editLink}>Edit</Link>}</h4>
      <p>{bubble.message}</p>
      {isAuthenticated && user._id === bubble.user && <button onClick={onDelete}>Delete</button>}
    </div>
  )
}

export default BubbleItem

