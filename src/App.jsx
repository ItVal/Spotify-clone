import React, { useState, useEffect } from "react"
import Body from "./Pages/Body";
import Login from "./Pages/Login";
import { Buffer } from "buffer";


const App = () => {
  const [token, setToken] = useState("");

  const refeshToken = ()=> {
    const client_id = 'b730196b4f704762b31ea406c402262a';
    const client_secret = 'dbbe0176ecbf4264a1f6e589ba55960c';
    const client_id_secret = Buffer.from(client_id + ':' + client_secret);
    const url = 'https://accounts.spotify.com/api/token';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${client_id_secret.toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials'
      }).toString()
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => data['access_token'])
    .then(token => localStorage.setItem('token', token));
  }

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
    setInterval(refeshToken, (10 * 3600 * 1000));
  }, []);
  return <div className="app"> {token ? <Body /> : <Login />}</div>;
}

export default App


