
import React, {useState, useEffect} from "react";
import Body from "./Pages/Body";
import Connexion from "./Pages/Connexion";

function App() {
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

   return <div> {token ? <Body /> : <Connexion />}</div>;
}
export default App;
