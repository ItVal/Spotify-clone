import React, { useState, useEffect } from "react";
import "../assets/Style.css";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { MdSavedSearch } from "react-icons/md";
import logo from "../assets/mylogo.png";

const Body = () => {
  const [searchKey, setSearchKey] = useState("");
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
          <img width={"100%"} src={artist.album.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="body">
     

        <div className="navbar">
        <img className="sidebar__logo" src={logo} alt="" />
          <div className="menu">Home</div>
          <form onSubmit={searchArtists} className="reseach">
            <input
              className="search-zone"
              placeholder="Search for Artists, Songs, or Podcasts "
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="btn-search" type={"submit"}>
              <MdSavedSearch />
            </button>
          </form>
          <div className="sigin">Login</div>
        </div>

        <div className="main">
          <div className="sidebar"> <Sidebar /></div>
          <div className="mybodi">{renderArtists()}</div>
        </div>

        <div className="myfooter">
          <Footer />
        </div>
      </div>
  
  );
};

export default Body;
