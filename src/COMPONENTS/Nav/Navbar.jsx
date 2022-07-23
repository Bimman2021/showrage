import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
//import Avatar from '@mui/material/Avatar';
import { NavLink, useLocation } from 'react-router-dom'
import './style.css'
import OffCanvas from '../../BOOTSTRAP/Offcanvas'


function NavLinkss({ className }) {
      const location = useLocation().pathname

      if (location === '/') {
            return (
                  <ul className={`${className && className} ul__ca`} >
                        <li className='li__ca'>
                              <NavLink className='link' to='/login' >Login</NavLink>
                        </li>
                        <li className='li__ca'>
                              <NavLink className='link' to='/register' >register</NavLink>
                        </li>
                        <li className='li__ca'>
                              <NavLink className='link' to='/contact' >contact</NavLink>
                        </li>
                        <li className='li__ca'>
                              <NavLink className='link' to='/about' >about</NavLink>
                        </li>


                  </ul >
            )
      } else {

            return (

                  <ul className={`${className && className} ul__ca`} >
                        <li className='li__ca'>
                              <NavLink className='link' to='/home' >home</NavLink>
                        </li>
                        <li className='li__ca'>
                              <NavLink className='link' to='/profile' >profile</NavLink>
                        </li>
                        <li className='li__ca'>
                              <NavLink className='link' to='/list' >my list</NavLink>
                        </li>

                  </ul >
            )

      }
}

const Navbar = () => {
      const [showCanvas, setShowCanvas] = useState(false)
      return (
            <div>
                  <OffCanvas showModal={showCanvas} setshowModal={setShowCanvas} component={<NavLinkss />} />

                  <div className='cont__nav'>
                        <div className='nav__flex'>
                              <div><span><i>Showrange</i></span></div>
                              <div className='nav__part'>

                                    <FontAwesomeIcon icon={faBars} className='shown m__icon' onClick={() => setShowCanvas(true)} />

                                    <NavLinkss className='shownow' />

                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar