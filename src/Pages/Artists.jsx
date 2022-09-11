import React from "react";
import "../assets/Style.css";

const Artists = (props) => {
  return (
    <>
    <div className="artist_title">
      Liste des Artists
      </div>
      <br />
      <div className="myartists">{props.renderArtist}</div>
    </>
  );
};

export default Artists;
