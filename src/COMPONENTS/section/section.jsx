import Nav from "../Components/Nav/Nav"
import React from "react"
import { Button } from "@mui/material"
import deviceImg from '../img/device.png'
import Faq from "../faq/Faq"
import './style.css'

import { Link, useNavigate } from 'react-router-dom'

export function Section3() {

      return (
            <section className="head__sect mgTop2em">
                  <div className="border__top bgClr">
                        <div className='container__fluid'>

                              <div className='flex__m wrap__990'>
                                    <div className="mgBtm__576">
                                          <div className="bases__50">
                                                <img src={deviceImg} alt='' width={'100%'} />
                                          </div>
                                    </div>
                                    <div className="bases__2">
                                          <h1>Unlimited Movies, Tv shows, And More </h1>
                                          <p className="p__me">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nemo temporibus excepturi ad magnam animi? </p>

                                    </div>

                              </div>
                        </div>
                  </div>
            </section>
      )
}
