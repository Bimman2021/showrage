import React from 'react'
import img from '../../IMG/bg.jpg'
import img1 from '../../IMG/howange.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../../BOOTSTRAP/modal'
import { Link } from 'react-router-dom'
import './style.css'
import { faPlusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ModalComponent = ({ to }) => {

      return (
            <div className='compo' >
                  <div className='ih'>
                        <img src={img1} alt='' className='ih__img' />
                  </div>
                  <div className='details__'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, enim?</p>
                        <div className=''>
                              <Link to='' className='iconP__cont'>
                                    <FontAwesomeIcon className='iconP' icon={faPlusCircle} />
                                    <br />
                                    Add to list
                              </Link>
                              <Link to='' className='iconP__cont'>
                                    <FontAwesomeIcon className='iconP' icon={faInfoCircle} />
                                    <br />
                                    more info
                              </Link>
                        </div>
                  </div>
            </div>
      )
}

const List = () => {
      const [showModal, setShowModal] = useState(false);
      return (
            <div>
                  <Modal showModal={showModal} setShowModal={setShowModal} component={<ModalComponent />} />

                  <div className='jsy__cont'>


                        <div>
                              <h1>showrage Original</h1>
                        </div>
                        <div className='Listimg__cont'>
                              <div className='fig__it' >
                                    <img src={img} className='im_fg' alt='' onClick={() => setShowModal(true)} />

                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default List