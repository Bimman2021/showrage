import React, { useState, useEffect } from 'react'
import Navbar from '../../../COMPONENTS/Nav/Navbar'
import Input from '../../../COMPONENTS/input/Input'
import logo from '../../../IMG/mainLogo.svg'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PillBtn from '../../../COMPONENTS/Button/PillBtn'
import Switch from '../../../COMPONENTS/switch/Switch'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from '../../../REQUESTS/backend'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../AUTH/index'
import '../login/style.css'

const Register = () => {
      const navigate = useNavigate();
      const auth = useAuth()
      const [error, setError] = useState({})
      const [serverError, setServerError] = useState('')
      const initialValue = { name: '', email: '', pass: '' }
      const [formvalue, setFormvalue] = useState(initialValue);
      const [loading, setLoading] = useState(false);
      const [isSubmit, setIsSubmit] = useState(false);
      const send = () => {
            const data = {
                  method: 'POST',
                  mode: 'no-cors',
                  data: formvalue,
                  headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                  },

            }
            axios('/account/', data)
                  .then(function (response) {

                        if (response.data === 'user already exist') {
                              setServerError('user already exist try login')
                              setLoading(false)
                        }
                        if (response.data.message === 'success register') {
                              auth.setVerifyCode({
                                    vcode: response.data.verificationCode,
                                    email: response.data.email
                              })
                              setLoading(false)
                              navigate('/verifyemail', { replace: true })
                        }
                        if (response.data.message === 'fail') {
                              setServerError('something went wrong, please try again')
                              setLoading(false)
                        }
                  })
                  .catch(function (error) {
                        alert('something went wrong try again')
                        setLoading(false)
                  });
      }

      const onChange = (e) => {
            const { name, value } = e.target;
            setFormvalue({ ...formvalue, [name]: value.toLowerCase() });
            setError({ ...error, [name]: '' })

      }
      //===
      useEffect(() => {
            if (Object.keys(error).length === 0 && isSubmit) {
                  setLoading(true)
                  send()
            }
      }, [error, isSubmit])

      //===
      const validate = (data) => {
            const error = {}
            if (!data.name) {
                  error.name = "name is required";
            } else if (data.name.length < 4) {
                  error.name = "name must be more than 5 word";
            }
            if (!data.pass) {
                  error.pass = "password is required";
            } else if (data.pass.length < 6) {
                  error.pass = "password must be more than 6 word";
            }
            if (!data.email) {
                  error.email = "email is required";
            } else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(data.email)) {
                  error.email = "fill in a valid email address";
            }
            return error;
      }


      const submit = (e) => {
            e.preventDefault()
            setError(validate(formvalue))
            setIsSubmit(true)

      }

      return (
            <div className='lmsf__cont'>
                  <Helmet>
                        <title>Showrage || Join</title>
                        <meta name="theme-color" content="#c12528" />
                  </Helmet>
                  <Navbar />
                  <div className=''>
                        <form action="" className='dim__form' autoComplete='off' onSubmit={submit}>

                              <div className='center__flex '>
                                    <Link to='/'>
                                          <img src={logo} alt='' height={'auto'} width={'50px'} />
                                    </Link>
                              </div>
                              <div className='error'>{serverError}</div>
                              <Input
                                    label='name'
                                    name={'name'}
                                    required
                                    value={formvalue.name}
                                    onChange={onChange}

                              />
                              <Input
                                    label='email'
                                    icon={<FontAwesomeIcon icon={faEnvelope} className='form__icon' />}
                                    required
                                    name={'email'}
                                    value={formvalue.email}
                                    onChange={onChange}

                              />
                              <Input
                                    required
                                    type='password'
                                    name={'pass'}
                                    onChange={onChange}
                                    value={formvalue.pass}
                                    label='password'
                                    icon={<FontAwesomeIcon icon={faLock} className='form__icon' />}
                              />


                              <PillBtn
                                    text='register'
                                    loading={loading}

                              />
                              <div className='btw__flex' >
                                    <div className='center__flex'>
                                          <Switch />

                                    </div>
                                    <Link className='link' to=''>
                                          forgot password ?
                                    </Link>

                              </div>
                              <div className='btw__flex mgTop__1em' >

                                    <Link className='link' to='/login'>
                                          login account
                                    </Link>
                                    <Link className='link' to=''>
                                          Need help ?
                                    </Link>

                              </div>

                        </form>


                  </div>

            </div>
      )
}

export default Register