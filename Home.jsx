import React from "react";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import "../pages/Home.css";

function Home() {
  return (
    <div className="home__wrapper">
      <Navbar />
      <SearchResults />
    </div>
  );
}

export default Home;
