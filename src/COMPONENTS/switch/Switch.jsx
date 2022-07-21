import React from 'react'
import './style.css'
const Switch = () => {
      return (
            <div className='center__flex'>

                  <label className="toggler-wrapper style-1">
                        <input type="checkbox" />
                        <div className="toggler-slider">
                              <div className="toggler-knob"></div>
                        </div>
                  </label>

                  <span className='span__rem'>remember me</span>
            </div>
      )
}

export default Switch