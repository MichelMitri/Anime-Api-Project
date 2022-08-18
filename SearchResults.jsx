import React from "react";
import "../components/SearchResults.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchResults() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  async function getAnime() {
    setLoading(true);
    const { data } = await axios.get("https://api.jikan.moe/v4/anime");
    const animeData = data.data;
    setAnimes(animeData);
    setLoading(false);
  }

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <section className="search__result--wrapper">
      <div className="anime__browse">
        <h1 className="anime__browse--title">Browse all Anime</h1>
        <div className="anime__browsing--wrapper">
          <form>
            <input
              type="text"
              className="anime__browse--area"
              placeholder="Browse Anime"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
      <h3 className="search__result--title">Search results:</h3>
      <div className="search__results--container">
        {loading
          ? new Array(25).fill(0).map((_, index) => (
              <div className="search__results--skeleton" key={index}>
                <figure className="img__skeleton--wrapper skeleton">
                  <div className="img__skeleton skeleton"></div>
                </figure>
                <div className="anime__info--skeleton skeleton">
                  <h3 className="info__title--skeleton skeleton">rg</h3>
                  <h4 className="info__description--skeleton1 skeleton">y</h4>
                  <h4 className="info__description--skeleton2 skeleton">y</h4>
                  <h4 className="info__description--skeleton3 skeleton">y</h4>
                  <h4 className="info__description--skeleton4 skeleton">y</h4>
                </div>
              </div>
            ))
          : animes
              .filter((anime) => anime.title.toLowerCase().includes(query))
              .map((anime, index) => (
                <div className="search__results" key={index}>
                  <figure className="anime__img--wrapper">
                    <img
                      src={`${anime.images.jpg.image_url}`}
                      alt=""
                      className="anime__img"
                      onClick={() => navigate(`/info${anime.mal_id}`)}
                    />
                  </figure>
                  <div className="anime__info">
                    <h3 className="anime__info--title">
                      Title: {`${anime.title}`}
                    </h3>
                    <h4 className="anime__info--desc">
                      Episodes: {`${anime.episodes}`}
                    </h4>
                    <h4 className="anime__info--desc">
                      Genre: {`${anime.genres[0].name}`}
                    </h4>
                    <h4 className="anime__info--desc">
                      Score: {`${anime.score}`}
                    </h4>
                    <h4 className="anime__info--desc">
                      Status: {`${anime.status}`}
                    </h4>
                  </div>
                </div>
              ))}
      </div>
    </section>
  );
}

export default SearchResults;
