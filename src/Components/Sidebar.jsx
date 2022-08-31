import React from "react";
import '../App.css'
// import styled from "styled-components";
// import { MdHomeFilled, MdSearch } from "react-icons/md";
// import { IoLibrary } from "react-icons/io5";
// import logo from "./logo.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src=""
        alt=""
      />
      <div>
        <img className="sidebar__home" src="" alt="" />
        <span>Home</span>
      </div>
      <div>
        <img className="sidebar__search" src="" alt="" />
        <span>Search</span>
      </div>
      <div>
        <img className="sidebar__library" src="" alt="" />
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
