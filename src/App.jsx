// import Navbar from './Components/Navbar'
// import Login from './Pages/Login'
// import Home from './Pages/Home'
// import Post from './Pages/Post'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Body from "./Pages/Body";
import Connexion from "./Pages/Connexion";
// import Mainsongs from "./Pages/Mainsongs";

// import Fetch from "./Pages/Fetch";
// import Spotify from "./Components/Spotify";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
// import Mainsongs from "./Pages/Mainsongs";
// import Mainsongs from "./Pages/Mainsongs";

// function App() {
//  const user = false;
//   return (
//     <BrowserRouter>
//     <div className="App">
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
//       <Route path='/post/:id' element={user ? <Post /> : <Navigate to='/login' />} />
//     </Routes>
 
//     </div>
//     </BrowserRouter>
//   )
// }


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
