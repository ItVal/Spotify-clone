import React from "react";
import { Link } from "react-router-dom";
import '../assets/style.css'
import Imgprofil from '../assets/Val.jpeg'

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <span className="logo"><Link className="link" to="/">Yabiso Ndule</Link></span>
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
