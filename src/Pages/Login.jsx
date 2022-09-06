import React, { useEffect } from "react";
import "../assets/Style.css";
import logo from "../assets/mylogo.png";
import { useCallback } from "react";

const Login = () => {

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
  
    useEffect(() => {
        
    }, []);

  return (
    <div className="login">
      <img src={logo} alt="spotify" />
      <button onClick={handleClick}>Connect Spotify</button>
    </div>
  );
};

export default Login;
