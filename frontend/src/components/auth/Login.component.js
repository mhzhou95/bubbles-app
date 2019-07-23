import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {

      window.location.href = ('/')
    }
    if (error !== null) {
      if (alertContext.alerts.length < 1) {
        setAlert(error);
      }
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password
    });
  }
  return (
    <div>
      <h1>Login to Your Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="used to sign in" name="email" value={email}
          required onChange={onChange} />

        <label htmlFor="password">Password: </label>
        <input type="text" placeholder="password" name="password" value={password}
          required onChange={onChange} />

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;