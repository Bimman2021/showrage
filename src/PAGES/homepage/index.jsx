import React from "react";
import Row from "../../COMPONENTS/Row/Row";
import requests from "../../REQUESTS/requests";
import Banner from "../../COMPONENTS/Banner/Banner";
import Nav from "../../COMPONENTS/Nav/Nav";
import Navbar from "../../COMPONENTS/Nav/Navbar";
import Footer from "../../COMPONENTS/footer/footer";
//import Section2 from "../../COMPONENTS/section/section2";
import { Section3 } from '../index/Index'
function Home() {
      return (
            <div className="Home" style={{ overflowX: 'hidden' }}>
                  {/* Nav bar */}
                  {/* <Nav /> */}
                  <Navbar />
                  {/* Banner */}
                  <Banner />
                  {/* Rows */}

                  {/* <Row
                        title={"NETFLIX ORIGINALS"}
                        movie_request={requests.fetchNetflixOriginals}
                        isLargeRow
                  /> */}
                  <Row title={"Comedy Movies"} movie_request={requests.fetchComedyMovies} />
                  <Row title={"Trending Now"} movie_request={requests.fetchTrending} />
                  <Section3 />
                  {/*   <Row title={"Top Rated"} movie_request={requests.fetchTopRated} />
                  <Row title={"Action Movies"} movie_request={requests.fetchActionMovies} />
                  
                  <Row title={"Horror Movies"} movie_request={requests.fetchHorrorMovies} />
                  <Row
                        title={"Romance Movies"}
                        movie_request={requests.fetchRomanceMovies}
                  />
                  <Row
                        title={"Documentaries"}
                        movie_request={requests.fetchDocumentaries}
                  /> */}
                  <Footer />
            </div>
      );
}

export default Home;
