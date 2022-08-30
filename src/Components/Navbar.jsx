import React from "react";
import { Link } from "react-router-dom";
import '../assets/style.css'
import Imgprofil from '../assets/Val.jpeg'
import logo from '../assets/logo.png'

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <span ><Link className="link" to="/"><img src={ logo } alt="" className="logo" /></Link></span>
      {user ? (
        <ul className="list">
        <li className="listItem">
          <img src={Imgprofil} alt="" className="avatar" />
        </li>
        <li className="listItem">Nasibu valentin</li>
        <li className="listItem">Logout</li>
      </ul>
        ) : (<Link className="link" to="login">Login</Link>)}
        
    </div>
  );
};

export default Navbar;
