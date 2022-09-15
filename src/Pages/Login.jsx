import React, { useEffect, useState } from "react";
import "../assets/Style.css";
import logo from "../assets/mylogo.png";
import loginlogo from "../assets/login_streaming.jpg";
import { useCallback } from "react";
import jwtDecode from "jwt-decode";

const Login = ({ user, setUser }) => {
  //  login avec spotify
  const handleClick = useCallback(async () => {
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URL;
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }, []);

  // connexion avec google
  function handleCallback(response) {
    let userobject = jwtDecode(response.credential);
    setUser(userobject);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("login"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="login">
      <div className="gauche">
        <img src={logo} alt="lindada logo" className=""/>
        <h1 className="login-title1">Music To</h1>
        <h1 className="login-title">Fill Your Heart</h1>
        <div className="btn-log" id="login"></div>
        {/*  <div className="btn-login">
          
         <button className="btn-log" onClick={handleClick}>
          Spotify
        </button> 
        <div className="or">Or</div>
          
        </div>*/}
      </div>

      <div className="droite">
        <img src={loginlogo} alt="loginlogo" />
      </div>
    </div>
  );
};

export default Login;
