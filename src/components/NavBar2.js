import React, { Fragment } from "react";
import { HiSearch } from "react-icons/hi";
const NavBar = (props) => {
  return (
    <Fragment>
      <nav classCanme="">
        <div className="nav-options">
          <h1>NeuMix</h1>
          <span>Movies</span>
          <span>Tv Shows</span>
          <span>Trending</span>
          <span>Pricing</span>
          <input type="text" placeholder="VueMix"></input>
          <HiSearch />
          <div id="color-switch">
            <div id="color-switcher-move"> </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
