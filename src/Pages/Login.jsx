import React, { useEffect, useState } from "react";
import "../assets/Style.css";
import logo from "../assets/mylogo.png";
import { useCallback } from "react";
// import GoogleLogin from "react-google-login";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState({});

  const handleClick = useCallback(async () => {
    const client_id = "b730196b4f704762b31ea406c402262a";
    const redirect_uri = "http://localhost:5173";
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
      client_id:
        "674625790645-9npplupeai2iiof0gsebhks6rrubq48v.apps.googleusercontent.com",
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("login"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="login">
      <img src={logo} alt="lindada logo" />
      <h2 className="login-title">Connect whith</h2>
      <div className="btn-login">
      <button className="btn-log" onClick={handleClick}>Spotify</button>
      <div className="or">Or</div>
      <div  className="btn-log" id="login"></div>
      </div>
      {user && (
        <div>
          <img src={user.picture} />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
