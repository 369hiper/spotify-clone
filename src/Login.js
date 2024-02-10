import React from 'react'
import "./Login.css"
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
      {/* <h1>I am the Login page</h1> */}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

      {/* Spotify Logo */}
        {/* Login with spotify button*/}
        <br />
        <br />
        <a className='btn' href={loginUrl}>Login With Spotify</a>
    </div>
  )
}

export default Login;