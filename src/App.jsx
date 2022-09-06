import React, { useState, useEffect } from "react"
import Body from "./Pages/Body";
import Login from "./Pages/Login";


const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

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
  }, []);
  return <div className="app"> {token ? <Body /> : <Login />}</div>;
}

export default App


