import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  }
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.username}</li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create Bubble</Link></li>
      <li><a onClick={onLogout} href="#!"><i className="fas fa-sign-out-alt">
      </i> Logout</a></li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </Fragment>);
  return (
    <nav>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  )
}

export default Navbar;
