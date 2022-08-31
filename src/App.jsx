// import Navbar from './Components/Navbar'
// import Login from './Pages/Login'
// import Home from './Pages/Home'
// import Post from './Pages/Post'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Fetch from "./Pages/Fetch";
// import Spotify from "./Components/Spotify";
import Mainsongs from "./Pages/Mainsongs";
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
  const user = false;
   return (
   
     <div className="App">

      <Mainsongs />
     </div>
     
   )
 }
 
export default App
