import React from 'react'
import { PricingPlan } from '../index/Index'

const Compo = () => {

  return (
    <h1> you are on free plan</h1>
  )
}

const Plan = () => {

  return (
    <div className=''>
      <PricingPlan word={<Compo />} />
    </div>
  )
}

export default Plan