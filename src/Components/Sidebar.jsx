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


      <spam className="sidebar__title">
        PLAYLISTS
      </spam>

    </div>
  );
}

// const Container = styled.div`
//   background-color: black;
//   color: #b3b3b3;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
//   .top__links {
//     display: flex;
//     flex-direction: column;
//     .logo {
//       text-align: center;
//       margin: 1rem 0;
//       img {
//         max-inline-size: 80%;
//         block-size: auto;
//       }
//     }
//     ul {
//       list-style-type: none;
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       padding: 1rem;
//       li {
//         display: flex;
//         gap: 1rem;
//         cursor: pointer;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: white;
//         }
//       }
//     }
//   }
// `;

export default Sidebar;
