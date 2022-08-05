import React from 'react'
import { Helmet } from 'react-helmet'
import { PricingPlan } from '../index/Index'

const Compo = () => {

  return (
    <h1> you are on free plan</h1>

  )
}

const Plan = () => {

  return (
    <div className=''>
      <Helmet>
        <title>choose plan</title>
        <meta name="theme-color" content="#b2b4bf" />
      </Helmet>
      <PricingPlan word={<Compo />} />
    </div>
  )
}

export default Plan