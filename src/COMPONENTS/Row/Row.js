import React,{ useState, useEffect } from "react";
import axios from "../../REQUESTS/axios";
import "./Row.css";
import Tooltip from "@mui/material/Tooltip";
import {useAuth} from '../../AUTH/index';
import { useNavigate } from "react-router-dom";




//https://www.getpublica.com/ott-ctv-linear-channels
//'https:\/\/www.youtube.com\/s\/player\/0e7373c2\/www-widgetapi.vflset\/www-widgetapi.js'

const POSTER_URL = "https://image.tmdb.org/t/p/original"; //base url to load images

function Row({ title, movie_request, isLargeRow }) {
  
  const [movies, setMovies] = useState([]); // store movie data
 
  const navigate = useNavigate() // to navigate anyware in the page

  // useEffect to fetch movie data from TMDB using axios 
  useEffect(() => {
     axios.get(movie_request).then((responseData)=>{
      setMovies(responseData.data.results);
     }).catch((error) => {
      console.log(error)
     })
      
    
  }, [movie_request]);



//auth
const auth = useAuth()


  //fetch trailer url when a movie is clicked
  const handleClick = (movie) => {
     auth.setVmovies(movie);
      navigate('/info') 

  };

  return (
    <div className="row__me">
      <div className="mxm">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
      
         <div className="row__cont" key={movie.id} > 
         <div className="img__ont">
          <Tooltip
            placement="bottom"
            title={movie?.original_name || movie?.original_title}   
            style={{cursor: 'pointer'}}
          >
          
          
            <img
              className={`row__poster ${isLargeRow !== undefined ? "row__posterLarge": ''}`}
              onClick={() => handleClick(movie)}
              src={`${POSTER_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={''}
            />

          </Tooltip>
          </div>
          <div className="txt__ellipsis text">
          {movie?.original_name || movie?.original_title}
          </div>
          </div>
       
        ))}
      
      </div>
   
      
    </div>
    </div>
  );
}

export default Row;
