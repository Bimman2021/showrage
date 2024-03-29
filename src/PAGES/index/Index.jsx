import React from "react"
import Footer from "../../COMPONENTS/footer/footer"
import { Link, useNavigate } from "react-router-dom"
import PillBtn from "../../COMPONENTS/Button/PillBtn"
//import { useAuth } from '../../AUTH/index'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import logo from '../../IMG/wordlogo.svg'
import { Button } from "@mui/material"
import deviceImg from '../../IMG/device.png'
import SimpleAccordion from '../../COMPONENTS/accordion/accordion'
import CookieConsent from "react-cookie-consent";
//{ Cookies, getCookieConsentValue } 
import { Helmet } from 'react-helmet'
import './style.css'

export function PricingPlan({ word }) {



      return (
            <div className="img__bg">
                  <div className="container">
                        <div className="row push">
                              <div className="col-4">
                                    <div className="pricePlan__cont">
                                          {
                                                word ? (
                                                      word
                                                ) : (
                                                      <div>
                                                            <h1 className="pricePlan__h1">Pricing plan</h1>
                                                            <p className="pricePlan__p">
                                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam amet atque dolor itaque minima aspernatur minus magnam obcaecati eaque!
                                                                  Select a plan right for you. choose a package that suit you at affordable price you can't get anywhere</p>
                                                      </div>

                                                )
                                          }
                                    </div>
                              </div>
                              <div className="col pad__side-15">
                                    <div className="row nowrap">
                                          <div className="price1">
                                                <div className="price__head">
                                                      <h4>standard package</h4>
                                                      <h1>&#x20A6; 200.00</h1>

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
                                                <Link to={'/en/payment/standard'} className="btn__choose">Choose plan</Link>

                                          </div>
                                          <div className="price1 price2">
                                                <div className="price__head">
                                                      <h4>Premium package</h4>
                                                      <h1>&#x20A6; 500.00</h1>

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
                                                <Link to={'/en/payment/premium'} className="btn__choose">Choose plan</Link>

                                          </div>
                                    </div>

                              </div>

                        </div>
                  </div>
            </div>
      )
}

const Index = () => {
      const navigate = useNavigate()

      return (
            <div>
                  <Helmet>
                        <meta name="theme-color" content="#b2b4bf" />
                        <title>Showrage Nigeria - Watch TV Shows Online, Watch Movies Online</title>

                  </Helmet>
                  <TawkMessengerReact
                        propertyId="62e3567b37898912e9602cf7"
                        widgetId="1g940jla8" />
                  <nav className="in__nav">
                        <div className="logo">
                              <img src={logo} width='150px' height={'auto'} alt="" />
                              {/* <h3><i>Show</i>Rage</h3> */}
                        </div>
                        <Button href='/login' variant="contained" sx={{
                              fontFamily: 'Alegreya Sans SC', background: '#b2b4bf', color: '#383340', '&:hover': {
                                    backgroundColor: '#fa5c61',
                              }
                        }} >Login</Button>
                  </nav>
                  <div className="bg">
                        <div className="container flex__center">
                              <div className="row flex__center">
                                    <div className="col-4 pad__side-15">
                                          <h1>welcome to showrage</h1>
                                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum harum, et suscipit explicabo laboriosam cumque reiciendis sed tenetur perferendis provident!</p>
                                          <PillBtn onClick={() => navigate('/register')} text={'get started'} style={{ width: '40%' }} />
                                    </div>
                                    <div className="col pad__side-15">
                                          <img src={deviceImg} alt='' width={'100%'} />
                                    </div>
                              </div>
                        </div>
                  </div>
                  <PricingPlan />
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
                  <CookieConsent
                        onAccept={() => {
                              alert('user accept')
                        }}
                        location="bottom"
                        buttonText="I understand"
                        cookieName="user"
                        style={{ background: "#2B373B", textTransform: 'lowercase', maxWidth: '700px' }}
                        buttonStyle={{ backgroundColor: "#b2b4bf", fontSize: "14px", padding: '.8em', borderRadius: '4px' }}
                        expires={150}
                        debug={true}

                  >
                        <h3>We care about your privacy</h3><br />
                        <p>like every other website, we use functional cookies to manage users information. click on privacy policy to learn more about cookies &#x1F36A;</p>
                  </CookieConsent>
            </div>
      )
}

export default Index