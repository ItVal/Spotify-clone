import React from "react";

const Albums = (props) => {
  return (
    <>
      <div className="album_title">Liste des Albums liés à votre recherche</div>
      <br />
      <div className="myartists">{props.renderAlbums}</div>
    </>
  );
};

export default Albums;
