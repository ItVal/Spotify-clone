import React from 'react'
import { ImGoogle3 } from 'react-icons/im';
import { SiFacebook } from 'react-icons/si'; 
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  return (
    <div className='login'>
        <h1 className='loginTitle'> Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton google">
                 <h3 className='icon'> <ImGoogle3 /> </h3>
                 <span>Google</span>
                </div>
                <div className="loginButton facebook">
                <h3 className='icon'> <SiFacebook /> </h3>
                <span>Facebook</span>
                </div>
                <div className="loginButton github">
                <h3 className='icon'> <BsGithub /></h3>
                <span>Github</span>
                </div>
            </div>
            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
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