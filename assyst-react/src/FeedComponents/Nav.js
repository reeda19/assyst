import React from "react";
import "../Styles/nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="first-half">
          <input className="search-bar" type="text" placeholder="Search..."/>
      </div>
      <div className="second-half">
        <a href="">Home</a>
        <a href="">Explore</a>
        <a href="">Profile</a>
        <a href=""><div className="profile-pic"></div></a>
      </div>
    </div>
  );
}
