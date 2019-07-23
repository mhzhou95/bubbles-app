import React, { useContext, useEffect } from 'react'
import Bubbles from './bubbles/BubbleList.component';
import AuthContext from '../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Bubbles />
    </div>
  )
}

export default Home;
