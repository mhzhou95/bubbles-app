import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      if (alertContext.alerts.length < 2) {
        setAlert(error);
      }
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  })
  // destructure state 
  const { email, username, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      // if passwords dont match set alertContext error
      if (alertContext.alerts.length < 2) {
        setAlert('Passwords do not match')
      }
    } else {
      register({
        email,
        username,
        password
      })
      clearErrors();
    }
  }
  return (
    <div>
      <h1>Make a Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email" placeholder="used to sign in" name="email" value={user.email}
          required onChange={onChange} />

        <label htmlFor="username">Username: </label>
        <input type="text" placeholder="display name" name="username" value={user.username}
          required minLength={3} maxLength={12} onChange={onChange} />

        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="password" name="password" value={user.password}
          required minLength={6} maxLength={12} onChange={onChange} />

        <label htmlFor="password2">Confirm Password: </label>
        <input type="password" placeholder="confirm password" name="password2" value={user.password2}
          required minLength={6} onChange={onChange} />
        <input type="submit" maxLength={12} value="Register" />
      </form>
    </div>
  )
}

export default Register