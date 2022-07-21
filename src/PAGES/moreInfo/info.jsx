import { faPlus, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useAuth } from '../../AUTH/index'
import YouTube from 'react-youtube'
import './style.css'
import requests from "../../REQUESTS/requests";
import axios from "../../REQUESTS/axios";
import { useEffect, useRef } from 'react'
import Nav from '../../COMPONENTS/Nav/Nav'
import Footer from '../../COMPONENTS/footer/footer'
import Animation from '../../COMPONENTS/animation'
import Row from "../../COMPONENTS/Row/Row";

//import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';


const opts = {
      height: "390",
      width: "100%",
      playerVars: {
            autoplay: 1,
      },
};


// function SimpleSnackbar({ open, setOpen }) {


//       const action = (
//             <React.Fragment>

//                   <IconButton
//                         size="small"
//                         aria-label="close"
//                         color="inherit"
//                         onClick={() => setOpen(false)}
//                   >
//                         <CloseIcon fontSize="small" />
//                   </IconButton>
//             </React.Fragment>
//       );

//       return (
//             <div>

//                   <Snackbar
//                         open={open}
//                         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//                         // autoHideDuration={6000}
//                         onClose={() => setOpen(false)}
//                         message="This video does not have trailer !"
//                         action={action}
//                   />
//             </div>
//       );
// }




//const POSTER_URL = "https://image.tmdb.org/t/p/original/"; //base url to load images


const Info = () => {
      const [trailerUrl, setTrailerUrl] = useState(""); //store trailer url
      const [loading, setLoading] = useState(true); //store trailer url
      const [open, setOpen] = useState(false);
      const dRef = useRef();
      const auth = useAuth();
      const movie = auth.movie;


      const fetchMovieTrailer = async (movie) => {
            //const m = "/movie/" + movie?.id.toString() + requests.trailerQuery
            await axios
                  .get("/movie/" + movie?.id.toString() + requests.trailerQuery)
                  .then((responseData) => {
                        setTrailerUrl(responseData.data.results[0]?.key);
                  })
                  .catch((error) => { });
      }


      useEffect(() => {
            fetchMovieTrailer(movie)
            dRef.current.focus()
      }, [movie])


      return (
            <div ref={dRef}>
                  <Nav />
                  {/* <SimpleSnackbar open={open} setOpen={setOpen} /> */}
                  <div className="pad__100">


                        <div className='info__cont'>
                              <div className="flex">

                                    <div className='xuyua0'>
                                          <h1>Trailer</h1>
                                          <div className={loading ? 'off__screen' : ''}>
                                                <YouTube videoId={trailerUrl} opts={opts} onReady={() => setLoading(false)} onError={() => setOpen(true)} />
                                          </div>

                                          {loading && <Animation />}

                                    </div>
                                    <div className='xml'>
                                          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                                          <p>{movie?.overview}</p>
                                          <div className="icon__div">
                                                <div className="iconP__cont">
                                                      <FontAwesomeIcon icon={faPlus} className='iconP' />
                                                      <br />
                                                      add to List

                                                </div>
                                                <div className="iconP__cont">
                                                      <FontAwesomeIcon icon={faShare} className='iconP' />
                                                      <br />
                                                      share
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className=''>
                              <Row title={"Related movies"} movie_request={requests.fetchTrending} />
                        </div>
                  </div>
                  <Footer />

            </div>
      )
}

export default Info
