import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  })
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.password2) {
      alertContext.setAlert('Passwords do not match')
    } else {
      console.log('Register Success')
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
        <input type="text" placeholder="password" name="password" value={user.password}
          required minLength={6} maxLength={12} onChange={onChange} />

        <label htmlFor="password2">Confirm Password: </label>
        <input type="text" placeholder="confirm password" name="password2" value={user.password2}
          required minLength={6} onChange={onChange} />
        <input type="submit" maxLength={12} value="Register" />
      </form>
    </div>
  )
}

export default Register