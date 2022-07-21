import React from 'react'
import { Link } from 'react-router-dom'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../../IMG/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'

const Footer = () => {
      return (
            <div className='footer'>
                  <div className='container' >
                        <div className="row">
                              <div className="col-sm-6 b2">
                                    <h5 className='mb-3'>Pages</h5>
                                    <ul className='menu__ul'>
                                          <li className='menu__li'><Link to='' className='link'>features</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>customers</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>pricing</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>movies</Link></li>
                                    </ul>
                              </div>
                              <div className="col-sm-6 b2">
                                    <h5 className='mb-3'>Company</h5>
                                    <ul className='menu__ul'>
                                          <li className='menu__li'><Link to='' className='link'>about</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>team</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>leadership</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>hiring</Link></li>

                                    </ul>
                              </div>
                              <div className="col-sm-6 b3">
                                    <h5 className='mb-3'>Contact</h5>
                                    <ul className='menu__ul'>
                                          <li className='menu__li'><Link to='' className='link'>contact us</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>offices location</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>support@showrage.com</Link></li>
                                          <li className='menu__li'><Link to='' className='link'>+234 890 9934 498</Link></li>
                                    </ul>
                              </div>
                              <div className="col-sm-6 b3">
                                    <h5 className='mb-3'>Subscribe</h5>
                                    <p>Get some offers, new, updates and features from showrage</p>
                                    <form>
                                          <div className='input__group'>
                                                <input
                                                      type='email'
                                                      aria-label='email'
                                                      className='form__controls'
                                                      placeholder='Your Email...'

                                                />
                                                <div className='icon__s'>
                                                      <button className='btn mg__-1' type='submit'>
                                                            <FontAwesomeIcon icon={faPaperPlane} />
                                                      </button>
                                                </div>
                                          </div>
                                    </form>
                                    <div className='socialMedia__cont'>
                                          <Link to='' className='socialMedia' >
                                                <FacebookRoundedIcon className='i' />
                                          </Link>
                                          <Link to='' className='socialMedia' >
                                                <GoogleIcon className='i' />
                                          </Link>
                                          <Link to='' className='socialMedia' >
                                                <TwitterIcon className='i' />
                                          </Link>
                                          <Link to='' className='socialMedia' >
                                                <InstagramIcon className='i' />
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <hr />
                  <div className="container">
                        <div className='row'>
                              <div className="c">
                                    <img src={Logo} alt='' height={'30px'} />
                                    <p>copyright &copy; showrage. all right reserved</p>

                              </div>
                              <div className="c">
                                    <ul>
                                          <li>
                                                <Link to=''>term of use</Link>
                                          </li>
                                          <li>
                                                <Link to=''>Privacy Policy</Link>
                                          </li>
                                          <li>
                                                <Link to=''>Cookies Policy</Link>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Footer