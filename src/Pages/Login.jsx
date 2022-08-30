import React, {useEffect} from 'react'
import '../assets/style.css'

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

// import { ImGoogle3 } from 'react-icons/im';
import { SiFacebook } from 'react-icons/si'; 
import { BsGithub } from 'react-icons/bs';



const Login = () => {
    // login manage

const clientId = '449313310500-bpambnvbicerdqltq67i5ostkun77420.apps.googleusercontent.com';

useEffect(() => {
   const initClient = () => {
         gapi.client.init({
         clientId: clientId,
         scope: ''
       });
    };
    gapi.load('client:auth2', initClient);
});

const onSuccess = (res) => {
    console.log('success:', res);
};

const onFailure = (err) => {
    console.log('failed:', err);
};
  return (
    <div className='login'>
        <h1 className='loginTitle'> Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton1 google">

                <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          
      />
  
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