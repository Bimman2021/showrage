import React from 'react'
import { Helmet } from 'react-helmet'
import { PricingPlan } from '../index/Index'
import { Link } from 'react-router-dom'

const Compo = () => {

  return (
    <div>
      <h1> you are on free plan</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quis ea sapiente laudantium dolores odio ipsam dolorum laborum ipsa cupiditate. </p>
      <Link to={'/en/home'}>Continue with free plan</Link>
    </div>


  )
}

const Plan = () => {

  return (
    <div className='container'>
      <Helmet>
        <title>Choose Plan</title>
        <meta name="theme-color" content="#b2b4bf" />
      </Helmet>
      <PricingPlan word={<Compo />} />

    </div>
  )
}

export default Plan