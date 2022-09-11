import React, { useState, useEffect } from "react";
import "../assets/Style.css";
import "../App.css";
import axios from "axios";
// import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
// import { MdSavedSearch } from "react-icons/md";
import logo from "../assets/mylogo.png";
import Albums from "./Albums";
import Artists from "./Artists";
import Tracks from "./Tracks";
import { FaSearchPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Navbar from "../Components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Home from "./Home";

const Body = () => {
  const [searchKey, setSearchKey] = useState("Ferre");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  const [categori, setcategori] = useState("Ferre");

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) setToken(localToken.toString());
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=${searchKey}&type=track,artist,album,playlist&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // params: {
        //   q: searchKey,
        //   type: "track, album, playlist, artist",
        // },
      }
    );

    setArtists(data.tracks.items);
    console.log("my console", data.tracks.items);
  };
  console.log(artists);

  // render albums
  const renderAlbums = () => {
    return artists.map((albm) => (
      <div key={albm.id}>
        {albm.album.images.length ? (
          <>
            <iframe
              style={{ borderRadius: "22px", height: "200px" }}
              src={`https://open.spotify.com/embed/album/${albm.album.id}?utm_source=generator`}
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            {/* <img width={"100%"} src={albm.album.images[0].url} alt="" /> */}
          </>
        ) : (
          <div>No Image</div>
        )}
        {albm.name}
      </div>
    ));
  };

  // render artist
  const renderArtist = () => {
    return artists.map((albm) => (
      <div key={albm.id}>
        {albm.album.images.length ? (
          <>
            {/* <iframe
                style={{ borderRadius: "22px", height: "200px" }}
                src={`https://open.spotify.com/embed/album/${albm.album.id}?utm_source=generator`}
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe> */}
            <img width={"100%"} src={albm.album.images[0].url} alt="" />
          </>
        ) : (
          <div>No Image</div>
        )}
        {albm.name}
      </div>
    ));
  };

  return (
    <div className="body">
      <div className="navbar">
        <img className="sidebar__logo" src={logo} alt="" />
        <div className="navigation">
          {data?.items ? data.items.map((items) => <p>{items.name}</p>) : null}
          <form onSubmit={searchArtists} className="reseach">
            <input
              className="search-zone"
              placeholder="Search for Artists, Songs, or Podcasts "
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            {/* <button className="btn-search">Search</button> */}
            <FaSearchPlus className="img-search" onClick={searchArtists} />
          </form>
        </div>
        <>
          <CgProfile className="img-search" />
          <RiLogoutCircleLine onClick={logout} className="img-search" />
        </>
      </div>

      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home renderAlbums={renderAlbums()} />} />
            <Route path="/albums" element={<Albums />} />
            <Route
              path="/artists"
              element={<Artists renderArtist={renderArtist()} />}
            />
            <Route path="/tracks" element={<Tracks />} />
          </Routes>
        </div>
      </div>

      <div className="myfooter">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
