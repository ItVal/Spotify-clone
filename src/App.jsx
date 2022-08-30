import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Post from './Pages/Post'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
 const user = false;
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
      <Route path='/post/:id' element={user ? <Post /> : <Navigate to='/login' />} />
    </Routes>
 
    </div>
    </BrowserRouter>
  )
}


export default App
