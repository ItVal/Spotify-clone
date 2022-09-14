import React, { useState, useEffect } from "react";
// import Body from "./Pages/Body";
import Login from "./Pages/Login";
import { Buffer } from "buffer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Pages/Body";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const refeshToken = () => {
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const client_id_secret = Buffer.from(client_id + ":" + client_secret);
    const url = "https://accounts.spotify.com/api/token";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${client_id_secret.toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }).toString(),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => data["access_token"])
      .then((token) => localStorage.setItem("token", token));
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log(hash);
    // getToken()
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    setInterval(refeshToken, 10000);
  }, []);
  let users = Object.keys(user).length;
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app">
          {" "}
          {users !== 0 ? <Body user={user} setUser={setUser} /> : <Login user={user} setUser={setUser} />}
        </div>
        ;
      </BrowserRouter>
    </div>
  );
};

export default App;
