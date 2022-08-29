import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si'; 
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  return (
    <div>
        <h1 className='loginTitle'> Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton">
                 <h3> <FcGoogle /> Google</h3>
                </div>
                <div className="loginButton">
                <h3> <SiFacebook /> Facebook</h3>
                </div>
                <div className="loginButton">
                <h3> <BsGithub />Github</h3>
                </div>
            </div>
            <div className="right">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />
                <button className='submit'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login