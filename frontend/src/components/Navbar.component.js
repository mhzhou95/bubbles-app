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
    <Fragment >
      <nav className="nav-bar">
        <ul>
          <h2>Hello {user && user.username}</h2>
          <li ><Link className="link" to="/">Home</Link></li>
          <li ><Link className="link" to="/create">Create Bubble</Link></li>
          <li ><a className="link" onClick={onLogout} href="#!"><i className="fas fa-sign-out-alt">
          </i> Logout</a></li>
        </ul>
      </nav>
    </Fragment>
  );
  const guestLinks = (
    <Fragment >
      <nav className="nav-bar">
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/register">Register</Link></li>
          <li><Link className="link" to="/login">Login</Link></li>
        </ul>
      </nav>
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
