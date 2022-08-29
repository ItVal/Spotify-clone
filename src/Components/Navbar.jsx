import React from "react";
import '../assets/style.css'
import Imgprofil from '../assets/Val.jpeg'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">YabisoNdule</span>
      <ul className="list">
        <li className="listItem">
          <img src={Imgprofil} alt="" className="avatar" />
        </li>
        <li className="listItem">Nasibu valentin</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
