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
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Navbar from "../Components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Body = () => {
  const [searchKey, setSearchKey] = useState("Ferre");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

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
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });

    setArtists(data.tracks.items);
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
            {/* <img width={"100%"} src={artist.album.images[0].url} alt="" /> */}
          </>
        ) : (
          <div>No Image</div>
        )}
        {albm.name}
      </div>
    ));
  };

  // render Artist
  // const renderArtists = () => {
  //   return artists.map((artist) => (
  //     <div key={artist.id}>
  //       {artist.album.images.length ? (
  //         <>
  //           <iframe
  //             style={{ borderRadius: "22px", height: "200px" }}
  //             src={`https://open.spotify.com/embed/album/${artist.album.id}?utm_source=generator`}
  //             width="100%"
  //             height="380"
  //             frameBorder="0"
  //             allowFullScreen=""
  //             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  //             loading="lazy"
  //           ></iframe>
  //           {/* <img width={"100%"} src={artist.album.images[0].url} alt="" /> */}
  //         </>
  //       ) : (
  //         <div>No Image</div>
  //       )}
  //       {artist.name}
  //     </div>
  //   ));
  // };

  // // playliste
  // useEffect(() => {
  //   if (localStorage.getItem("accesToken")) {
  //     setToken(localStorage.getItem("accessToken"));
  //   }
  // }, []);

  // const handleGetPlaylists = () => {
  //   axios
  //     .get("https://api.spotify.com/v1/playlists", {
  //       headers: {
  //         Authorization: "Bearer" + token,
  //       },
  //       params: {
  //         q: searchKey,
  //         type: "track",
  //       },
  //     })
  //     .then((reponse) => {
  //       setData(reponse.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="body">
      <div className="navbar">
        <img className="sidebar__logo" src={logo} alt="" />
        <div className="navigation">
          <>
            <strong className="" onClick="">
              PLAYLISTS
            </strong>
            {data?.items
              ? data.items.map((items) => <p>{items.name}</p>)
              : null}
          </>
          <form onSubmit={searchArtists} className="reseach">
            <input
              className="search-zone"
              placeholder="Search for Artists, Songs, or Podcasts "
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="btn-search">Search</button>
          </form>
        </div>
        <button onClick={logout} className="sigin">
          Logout
        </button>
      </div>

      <div className="main">
        <div className="sidebar">
         <Sidebar />
        </div>

        <div className="mybodi">
          {/* {renderAlbums()} */}
          {/* <BrowserRouter> */}
            <Routes>
            <Route path="/" element={renderAlbums()} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/tracks" element={<Tracks />} />
            </Routes>
          {/* </BrowserRouter> */}
          {/* <Albums />
          <Artists />
          <Tracks /> */}
        </div>
      </div>

      <div className="myfooter">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
