import React, { useState, useEffect } from "react";
import "../assets/Style.css";
import "../App.css"
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { MdSavedSearch } from "react-icons/md";
import logo from "../assets/mylogo.png";

const Body = () => {
  const [searchKey, setSearchKey] = useState("fally");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) setToken(localToken.toString());
  }, []);

  //   const logout = () => {
  //     setToken("");
  //     window.localStorage.removeItem("token");
  // }

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

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.album.images.length ? (
          <>
          <iframe style={{borderRadius:"12px"}} src={`https://open.spotify.com/embed/album/${artist.album.id}?utm_source=generator`} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <img width={"100%"} src={artist.album.images[0].url} alt="" />
          </>
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
        {artist.preview_url}
      </div>
    ));
  };

  return (
    <div className="body">
      <div className="navbar">
        <img className="sidebar__logo" src={logo} alt="" />
        <div className="navigation">
          <div className="menu">Home</div>
          <div className="menu">Library</div>
          <div className="menu3">Artists</div>
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
        <div className="sigin">Login</div>
      </div>

      <div className="main">
        <div className="sidebar">
          {" "}
          <Sidebar />
        </div>
        <div className="mybodi">{renderArtists()}</div>
      </div>

      <div className="myfooter">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
