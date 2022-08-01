import React, { useState, useEffect } from "react";
import axios from "../../REQUESTS/axios";
import requests from "../../REQUESTS/requests";
import { RWebShare } from "react-web-share";
import YouTube from "react-youtube";
import "./Banner.css";
import Animation from '../animation/index'

///
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Modalflat} from '../../BOOTSTRAP/modal'
import { Link } from 'react-router-dom'
import { faPlusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
///
const POSTER_URL = "https://image.tmdb.org/t/p/original"; //base url to load images


const opts = {
  height: "390",
  width: "100%",
  playerVars: {
        autoplay: 1,
  },
};




const ModalComponent = ({ trailerUrl, des }) => {
  const [loading, setLoading] = useState([]);
  return (
        <div className='compo' >
              <div className='trailer__cont'>
              <div className={loading ? 'off__screen' : ''}>
                                    <YouTube videoId={trailerUrl} opts={opts} onReady={() => setLoading(false)} onError={() => console.log('cant play boi')} />
                              </div>

                              {loading && <Animation />}
              </div>
              <div className='details__'>
                <div className="center">
                  {des}
                </div>
            
                    <div className=''>
                          <Link to='' className='iconP__cont'>
                                <FontAwesomeIcon className='iconP' icon={faPlusCircle} />
                                <br />
                                Add to list
                          </Link>
                          <Link to='' className='iconP__cont'>
                                <FontAwesomeIcon className='iconP' icon={faInfoCircle} />
                                <br />
                                more info
                          </Link>
               
                    </div>
              </div>
        </div>
  )
}



function Banner() {
  const [movie, setMovie] = useState([]);
 

  const [trailerUrl, setTrailerUrl] = useState(""); //store trailer url

  useEffect(() => {
    const fetchSingleMovie = async () => {
      const responseData = await axios.get(requests.fetchTrending);
      setMovie(
        responseData.data.results[
          Math.floor(Math.random() * responseData.data.results.length - 1)
        ]
      );
    };
    fetchSingleMovie();
  }, []);

  //function that truncates description to just 150 characters
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  const fetchMovieTrailer = async (movie) => {
    const id = movie?.id?.toString()
    await axios
          .get("/movie/" + id + requests.trailerQuery)
          .then((responseData) => {
                setTrailerUrl(responseData.data.results[0]?.key);
          })
          .catch((error) => { });
  };

  useEffect(() => {
    fetchMovieTrailer(movie)
  }, [movie])

  const [showModal, setShowModal] = useState(false);

  return (
    //header to display image
    
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${POSTER_URL}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <Modalflat showModal={showModal} setShowModal={setShowModal} component={<ModalComponent des={movie?.overview} trailerUrl={trailerUrl} />} />
      {console.log(`${POSTER_URL}${movie.backdrop_path}`)}
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
       
        {/* description */}
        <div className="banner__description">
          {truncate(movie?.overview,150)}
        </div>
         {/* 2 buttons */}
         <div className="banner__buttons">
          <button onClick={() => setShowModal(true)} className="banner__button">Play</button>
          <button className="banner__button">Watch later</button>
          
          <RWebShare
              data={{
                text: "how to watch movies on showrage",
                url: "http://showrage.com",
                title: "showage intro",
              }}
              onClick={() => console.log("shared successfully!")}
             >
    
              <button className="banner__button">Share 🔗</button>
          </RWebShare>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
