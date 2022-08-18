import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../pages/Info.css";
import { useNavigate, useParams } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

  async function getAnime() {
    setLoading(true);
    const { data } = await axios.get("https://api.jikan.moe/v4/anime");
    const animeData = data.data;
    setAnimes(animeData);
    console.log(animeData);
    setLoading(false);
  }

  
  useEffect(() => {
    getAnime();
  }, []);


  return (
    
    <>
      {loading ? (
        <section className="info__wrapper-skeleton">
          <div className="image__info--wrapper-skeleton">
            <div className="image__info--skeleton">dhtyjtyjtyjj</div>
          </div>
          <div className="anime__info--wrapper-skeleton">
            <h1> t</h1>
            <h2> t</h2>
            <h3>t</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              assumenda modi debitis totam odit ipsa voluptatum illum esse atque
              natus aliquid, sequi dolore officiis iure nihil maxime facilis
              commodi provident! Corporis perferendis magni temporibus deserunt
              esse eum consequatur rem cum, voluptate reiciendis asperiores quod
              at est explicabo sapiente repudiandae tempora aliquam cupiditate
              dolorum. Ex consectetur cum commodi architecto numquam distinctio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis at voluptatem, optio, sit eveniet dolorem reiciendis
              quia corporis ea ipsam aperiam minima architecto sequi? Saepe
              asperiores facere velit soluta nihil.
            </p>
            <div className="info__link--skeleton">
              <div className="info__more--skeleton">t</div>
              <div className="info__youtube--skeleton">t</div>
            </div>
          </div>
        </section>
      ) : (
        animes.filter(anime => +anime.mal_id === +id).map((anime, index) => (
          <section className="info__wrapper" key={index}>
            <figure className="image__info--wrapper">
              <button className="back__btn" onClick={() => navigate("/home")}>
                ← Back
              </button>
              <img
                src={anime.images.jpg.image_url}
                alt=""
                className="image__info"
              />
            </figure>
            <div className="anime__info--wrapper">
              <h1>Title: {anime.title}</h1>
              <h2>Studio: {anime.studios[0].name}</h2>
              <h3>status: {anime.status}</h3>
              <p>Description: {anime.synopsis}</p>
              <div className="info__link">
                Interested? watch the trailer to see more:{" "}
                <a href={`${anime.trailer.url}`} className="anime__trailer">
                  {anime.trailer.url}
                </a>
              </div>
            </div>
          </section>
        ))
      )}

    </>
  );
}

export default Info;
