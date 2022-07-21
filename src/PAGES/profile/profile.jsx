import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../COMPONENTS/Nav/Nav'
import './style.css'

const Profile = () => {
      return (
            <div>
                  <Nav />

                  <div className='cont__profile'>
                        <div className='flex'>
                              <section className='secrt__v'>
                                    <div className='top__div flex'>
                                          <h1>Account</h1>
                                          <p>Joined since 10 Aug 2022</p>
                                    </div>

                                    <div className='flex min push__top border__btm'>
                                          <div className='flex__basilo'>
                                                membership & billing
                                          </div>
                                          <div className='flex__basilo'>
                                                banmaster@gmail.com
                                                <p>Password: ********</p>
                                          </div>
                                          <div className='flex__basilo right'>
                                                <Link to=''> Change email</Link>
                                                <p><Link to=''>Change password</Link></p>
                                          </div>
                                    </div>
                                    <div className='flex border__btm'>
                                          <div className='flex__basilo'>
                                                plan details
                                          </div>
                                          <div className='flex__basilo'>
                                                standard
                                          </div>
                                          <div className='flex__basilo right'>
                                                <Link to=''> Change plan</Link>
                                          </div>
                                    </div>
                                    <div className='flex center push__top'>
                                          <Link to='' >Logout from all device</Link>
                                    </div>

                              </section>

                        </div>
                  </div>
            </div>
      )
}

export default Profile