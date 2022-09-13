import React from "react";

const Navbar = () => {
  return  (
    <div className="header">
      <div className="header__left">
      <span> logo </span>
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <span> img </span>
        <h4>Nom</h4>
      </div>
    </div>
  );
};

export default Navbar;
