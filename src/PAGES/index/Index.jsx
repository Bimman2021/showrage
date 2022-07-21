import Nav from "../../COMPONENTS/Nav/Nav"
import Navbar from "../../COMPONENTS/Nav/Navbar"
import React from "react"
import Footer from "../../COMPONENTS/footer/footer"
import hero from '../../IMG/hero.png'
import heroD from '../../IMG/hero_mobile.png'
import { Button } from "@mui/material"
import deviceImg from '../../IMG/device.png'
import SimpleAccordion from '../../COMPONENTS/accordion/accordion'
import Faq from "../faq/Faq"
import './style.css'
import img1 from '../../IMG/nickelodeon.png'
import img2 from '../../IMG/kyknet.png'
import img3 from '../../IMG/national_geo.png'
import img4 from '../../IMG/hbo.png'
import img5 from '../../IMG/supersport.png'
import img6 from '../../IMG/bbc.png'
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
                                          <h1>The return of Jenifa </h1>
                                          <p className="p__me">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nemo temporibus excepturi ad magnam animi? </p>

                                          <div style={{ marginTop: '2em' }}>
                                                <Button variant="contained">
                                                      play now
                                                </Button>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </section>
      )
}

const Index = () => {
      return (
            <div>
                  <Nav />
                  <div className="img__bg">
                        <div className="container">
                              <div className="row push">
                                    <div className="col-4">
                                          <div className="pricePlan__cont">
                                                <h1 className="pricePlan__h1">Pricing plan</h1>
                                                <p className="pricePlan__p">
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam amet atque dolor itaque minima aspernatur minus magnam obcaecati eaque!
                                                      Select a plan right for you. choose a package that suit you at affordable price you can't get anywhere</p>

                                          </div>
                                    </div>
                                    <div className="col pad__side-15">
                                          <div className="row nowrap">
                                                <div className="price1">
                                                      <div className="price__head">
                                                            <h4>standard package</h4>
                                                            <h1>$ 20.00</h1>

                                                      </div>
                                                      <div className="price__body">
                                                            <ul className="theme__ul">
                                                                  <li className="theme__li">Push notifications</li>
                                                                  <li className="theme__li">Unlimited streaming</li>
                                                                  <li className="theme__li">watch on any device</li>
                                                                  <li className="theme__li">free post messages</li>
                                                                  <li className="theme__li">child lock</li>

                                                            </ul>

                                                      </div>
                                                      <button className="btn__choose">Choose plan</button>

                                                </div>
                                                <div className="price1 price2">
                                                      <div className="price__head">
                                                            <h4>Premium package</h4>
                                                            <h1>$ 50.00</h1>

                                                      </div>
                                                      <div className="price__body">
                                                            <ul className="theme__ul">
                                                                  <li className="theme__li">Push notifications</li>
                                                                  <li className="theme__li">Unlimited streaming</li>
                                                                  <li className="theme__li">watch on any device</li>
                                                                  <li className="theme__li">free post messages</li>
                                                                  <li className="theme__li">child lock</li>

                                                            </ul>

                                                      </div>
                                                      <button className="btn__choose">Choose plan</button>

                                                </div>
                                          </div>

                                    </div>

                              </div>
                        </div>
                  </div>
                  <section className="faq__section">
                        <div className="container">
                              <div className="row">
                                    <div className="col-4 pad__side-15">
                                          <h1 className="pricePlan__h1">FAQ</h1>
                                          <p className="pricePlan__p">Answers to most frequently asked questions. if you don't find the useful or has any more questions please contact the customer support</p>
                                    </div>
                                    <div className='col pad__side-15'>
                                          <SimpleAccordion />
                                    </div>
                              </div>
                        </div>
                  </section>
                  <Footer />
            </div>
      )
}

export default Index