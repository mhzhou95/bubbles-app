import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading }
  return (
    <div>

    </div>
  )
}

export default PrivateRoute
