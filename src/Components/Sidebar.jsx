import React from "react";
import "../assets/Style.css";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="side_bar">
      <div className="home">
        <span className="sidebar__home">
          <AiOutlineHome />{" "}
        </span>
        <Link to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
         <span className="home1">Home</span> 
        </Link>
      </div>
      <div className="sidebar_album">
        <span className="sidebar__albums">
          {" "}
          <BiLibrary />{" "}
        </span>
        <Link
          to="/albums"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
         <span className="album">Albums</span> 
        </Link>
      </div>
      <div className="sidebar__artists">
        <span className="sidebar__artist" src="" alt="">
          {" "}
          <FaMicrophoneAlt />{" "}
        </span>
        <Link
          to="/artists"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <span className="artists">Artists</span> 
        </Link>
      </div>
      <div className="sidebar__tracks">
        <span className="sidebar__track" src="" alt="">
          {" "}
          <MdOutlineLibraryMusic />{" "}
        </span>
        <Link
          to="/tracks"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <span className="track">Tracks</span> 
        </Link>
      </div>


      <span className="sidebar__title">
        PLAYLISTS
      </span>

    </div>
  );
}


export default Sidebar;
