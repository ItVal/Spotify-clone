import React from "react";
// import styled from "styled-components";

function Footer() {
  return ( 
  <div className="footer">
  <div className="footer__left">
    <img
      className="footer__albumLogo"
      src=''
      alt=''
    />
    
      <div className="footer__songInfo">
        <h4>album</h4>
        <p>artiste</p>
      </div>
    
      <div className="footer__songInfo">
        <h4>No song is playing</h4>
        <p>...</p>
      </div>
  </div>
</div>
);
}



export default Footer;
