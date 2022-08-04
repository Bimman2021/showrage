import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from '../../IMG/wordlogo.svg'
import {Button} from '@mui/material';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";



function Nav({button}) {
  const [showNavBar, handleShowNavBar] = useState(false);
  const [nap,setNap] = useState(false);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShowNavBar(true);
      } else {
        handleShowNavBar(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${showNavBar && "nav__bar"}`}>

      
     <div className="flex">
     <img
        className="nav__logo"
        src={logo}
        alt="logo"
      />
     
      </div> 
      
      { button ? 
      (<div className="right"> <Button href='/login' size='small' variant="contained" color="error">Login</Button></div>)
      : 
      (<div className="nap__parent">
      <FontAwesomeIcon className='dsp__none' icon={nap ? faTimes : faBars} onClick={() => { setNap(!nap) }} />
      <ul className={`${nap ? '' : 'ul__dsp'} ul`}>
      <li className="li"><Link className="link" to='/home'>Home</Link> </li>
      <li className="li"><Link className="link" to='/tvshow'>Tv shows</Link> </li>
      <li className="li"><Link className="link" to='/movies'>Movies</Link> </li>
      <li className="li"><Link className="link" to='/profile'>Profile</Link> </li>
      <li className="li"><Link className="link" to='/list'>My List</Link> </li>
    </ul>
    </div>)
      }
      
    </div>
  );
}

export default Nav;
//https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg