import React from "react";
import "../pages/Main.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <section className="main__page">
      <nav className="main__page--navbar">
        <figure className="main__img--wrapper">
          <img
            src="https://c.neh.tw/thumb/f/720/comhiclipartfdebg.jpg"
            alt=""
            className="anime__nav--img"
          />
          <h4 className="nav__logo--title">MAW</h4>
        </figure>
        <button className="nav__about--button">About</button>
      </nav>
      <div className="main__page--description">
        <h1 className="main__page--title">
          Welcome to MAW: Michel's Anime Website
        </h1>
        <p className="main__page--para">
          This is a website that I've built for you to be able to search for any
          anime that you like (within the api of course). It's not the best but
          i hope it looks and feels decent to the normal person. Press the
          "Home" button down below to go to the home page to search. Thank you
          for visiting MAW.
        </p>
        <button
          className="main__homepage--btn"
          onClick={() => navigate("/home")}
        >
          Home
        </button>
      </div>
    </section>
  );
}

export default Main;
