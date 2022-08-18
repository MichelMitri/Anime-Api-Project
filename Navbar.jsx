import React from "react";
import "../components/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="anime__navbar">
        <div className="anime__nav--logo">
          <figure onClick={() => navigate("/")} className="anime__img--wrapper">
            <img
              src="https://c.neh.tw/thumb/f/720/comhiclipartfdebg.jpg"
              alt=""
              className="anime__nav--img"
            />
            <h4 className="logo__title">MAW</h4>
          </figure>
        </div>
        <div className="nav__helpers">
          <a href="/" className="nav__link nav__home">
            Front Page
          </a>
          <button className="nav__ link nav__contact--btn">Contact</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
