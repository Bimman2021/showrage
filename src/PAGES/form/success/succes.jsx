import React from 'react'
import { Link } from 'react-router-dom'
import '../login/style.css'

const Success = () => {
      return (
            <div className='background'>
                  <div className='background__flex'>
                        <div className=''>
                              <img src={require('../../../IMG/success.gif')} width={'100%'} alt='' />
                        </div>
                        <div className='center'>
                              <p className='txt'>your email has been successfully verify click on the link below to login!</p>
                              <Link to='/login'>click to login</Link>
                        </div>
                  </div>

            </div>
      )
}

export default Success