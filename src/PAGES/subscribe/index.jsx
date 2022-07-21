import React from 'react'
import Nav from '../../COMPONENTS/Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Button } from '@mui/material'

const Subscribe = () => {
      return (
            <div className='kont'>
                  <Nav />
                  <div className='csp__cont'>
                        <div className='loskie__'>
                              <h2>Choose a plan right for you</h2>
                              <div>
                                    <ul className='ul__'>
                                          <li>
                                                <FontAwesomeIcon className='icon__spar' icon={faCheck} />
                                                Watch all you want ads-free
                                          </li>
                                          <li>
                                                <FontAwesomeIcon className='icon__spar' icon={faCheck} />
                                                recomended just for you
                                          </li>
                                          <li>
                                                <FontAwesomeIcon className='icon__spar' icon={faCheck} />
                                                change or cancel your plan anytime
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className='table__cont'>
                              <section className='csp__table'>
                                    <div className='mg__select'>
                                          <div className="body__  ">
                                                <div className='plans__ strong__p '>
                                                      Mask
                                                </div>
                                          </div>
                                          <div className="strong__ body__">
                                                Monthly price
                                          </div>
                                          <div className="strong__ body__">
                                                Video quality
                                          </div>
                                          <div className="strong__ body__">
                                                Resolution
                                          </div>
                                          <div className="strong__ body__">
                                                Watch on any device
                                          </div>
                                    </div>
                                    <div className='each__cont'>
                                          <div className="body__">
                                                <div className='plans__'>
                                                      Basic
                                                </div>
                                          </div>
                                          <div className="body__">
                                                &#36; 10
                                          </div>
                                          <div className="body__">
                                                good
                                          </div>
                                          <div className="body__">
                                                480p
                                          </div>
                                          <div className="body__">
                                                <FontAwesomeIcon className='' icon={faCheck} />
                                          </div>
                                    </div>
                                    <div className='each__cont'>
                                          <div className="body__">
                                                <div className='plans__'>
                                                      Standard
                                                </div>
                                          </div>
                                          <div className="body__">
                                                &#36; 20
                                          </div>
                                          <div className="body__">
                                                Better
                                          </div>
                                          <div className="body__">
                                                720p
                                          </div>
                                          <div className="body__">
                                                <FontAwesomeIcon className='' icon={faCheck} />
                                          </div>
                                    </div>
                                    <div className='each__cont'>
                                          <div className="body__">
                                                <div className='plans__'>
                                                      Premium
                                                </div>
                                          </div>
                                          <div className="body__">
                                                &#36; 50
                                          </div>
                                          <div className="body__">
                                                Best
                                          </div>
                                          <div className="body__">
                                                HD
                                          </div>
                                          <div className="body__">
                                                <FontAwesomeIcon className='' icon={faCheck} />
                                          </div>
                                    </div>

                                    {/* <div className='head__pick'>
                                          <div>
                                                <div>

                                                </div>
                                                <div>
                                                      <div className='plans__'>
                                                            Basic
                                                      </div>
                                                </div>
                                                <div>
                                                      <div className='plans__'>
                                                            standard
                                                      </div>
                                                </div>
                                                <div>
                                                      <div className='plans__'>
                                                            premium
                                                      </div>
                                                </div>
                                          </div>


                                    </div>
                                    <div className='body__pick'>


                                          <tr>
                                                <th>
                                                      Monthly price
                                                </th>
                                                <div>
                                                      USD 10
                                                </div>
                                                <div>
                                                      USD 20
                                                </div>
                                                <div>
                                                      USD 50
                                                </div>
                                          </tr>
                                          <tr>
                                                <th>
                                                      Video quality
                                                </th>
                                                <div>
                                                      USD 10
                                                </div>
                                                <div>
                                                      USD 20
                                                </div>
                                                <div>
                                                      USD 50
                                                </div>
                                          </tr>
                                          <tr>
                                                <th>
                                                      Resolution
                                                </th>
                                                <div>
                                                      USD 10
                                                </div>
                                                <div>
                                                      USD 20
                                                </div>
                                                <div>
                                                      USD 50
                                                </div>
                                          </tr>
                                          <tr>
                                                <th>
                                                      Watch on any device
                                                </th>
                                                <div>
                                                      <FontAwesomeIcon className='' icon={faCheck} />
                                                </div>
                                                <div>
                                                      <FontAwesomeIcon className='' icon={faCheck} />
                                                </div>
                                                <div>
                                                      <FontAwesomeIcon className='icon__spar' icon={faCheck} />
                                                </div>
                                          </tr>
                                    </div> */}
                              </section>

                        </div>
                        <div className='picolo'>
                              <Button variant='contained' color='error' >Subscribe</Button>
                        </div>
                  </div>
            </div>
      )
}

export default Subscribe