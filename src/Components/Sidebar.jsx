import React from "react";
import "../assets/Style.css";

import { AiOutlineHome } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa"; 
import { MdOutlineLibraryMusic } from "react-icons/md";


function Sidebar() {
  return (
    <div className="side_bar">
      <div className="home">
        <span className="sidebar__home"><AiOutlineHome /> </span> 
        <span>Home</span>
      </div>
      <div className="search">
        <span className="sidebar__search" > <FaSearchPlus /> </span>
        <span>Search</span>
      </div>
      <div className="library">
        <span className="sidebar__library" src="" alt=""> <MdOutlineLibraryMusic /> </span>
        <span>Your Library</span>
      </div>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
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
