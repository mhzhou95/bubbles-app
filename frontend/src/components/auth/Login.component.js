import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('login form submited')
  }
  return (
    <div>
      <h1>Login to Your Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="used to sign in" name="email" value={user.email} onChange={onChange} />

        <label htmlFor="password">Password: </label>
        <input type="text" placeholder="password" name="password" value={user.password} onChange={onChange} />

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;