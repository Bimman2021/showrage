import React, { useState, useEffect } from 'react'
import Navbar from '../../../COMPONENTS/Nav/Navbar'
import Input from '../../../COMPONENTS/input/Input'
import logo from '../../../IMG/mainLogo.svg'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PillBtn from '../../../COMPONENTS/Button/PillBtn'
import Switch from '../../../COMPONENTS/switch/Switch'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useAuth } from '../../../AUTH'
import axios from '../../../REQUESTS/backend'
import './style.css'

const Login = () => {
      const [error, setError] = useState({})
      const [serverError, setServerError] = useState('')
      const initialValue = { email: '', pass: '' }
      const [formvalue, setFormvalue] = useState(initialValue);
      const [loading, setLoading] = useState(false);
      const [isSubmit, setIsSubmit] = useState(false);
      const auth = useAuth();
      const navigate = useNavigate();


      //===
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
            axios('/account/login/', data)
                  .then(function (response) {

                        setLoading(false)
                        if (response.data.message === 'incorrect') {
                              setLoading(false)
                              setServerError('email or password is incorrect')
                        } else if (response.data.message === 'welcome') {
                              setLoading(false)
                              const data = response.data.data
                              console.log(data)
                              auth.setUser({
                                    data
                              })
                              if (response.data.data.package === 'free') {
                                    navigate('/en/plan', { replace: true })
                              } else {
                                    navigate('/en/home', { replace: true })
                              }

                        } else if (response.data.message === 'verify mail') {
                              auth.setVerifyCode({
                                    vcode: response.data.verificationCode,
                                    email: response.data.email
                              })
                              setLoading(false)
                              navigate('/verifyemail', { replace: true })
                        } else {
                              setServerError('something went wrong! try again')
                              setLoading(false)
                        }
                  })
                  .catch(function (error) {

                        setLoading(false)
                        setServerError('something went wrong! try again')
                  });
      }
      //===
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
                        <title>Showrage || Login</title>
                        <meta name="theme-color" content="#c12528" />
                  </Helmet>
                  <Navbar />
                  <div className=''>
                        <form action="" className='dim__form' autoComplete='off' onSubmit={submit} >
                              <div className='center__flex'>
                                    <Link to='/'>
                                          <img src={logo} alt='' height={'auto'} width={'50px'} />
                                    </Link>
                              </div>
                              <div className='error'>
                                    {serverError}
                              </div>
                              <Input
                                    required
                                    type={'email'}
                                    label={'email'}
                                    value={formvalue.email}
                                    name={'email'}
                                    onChange={onChange}
                                    error={error.email}
                                    icon={<FontAwesomeIcon icon={faEnvelope} className='form__icon' />}

                              />
                              <Input
                                    required
                                    type='password'
                                    error={error.pass}
                                    autocomplete={'off'}
                                    label='password'
                                    name={'pass'}
                                    value={formvalue.pass}
                                    onChange={onChange}
                                    icon={<FontAwesomeIcon icon={faLock} className='form__icon' />}
                              />


                              <PillBtn text='login' loading={loading} />
                              <div className='btw__flex' >
                                    <div className='center__flex'>
                                          <Switch />

                                    </div>
                                    <Link className='link' to='/forgot'>
                                          forgot password ?
                                    </Link>

                              </div>
                              <div className='btw__flex mgTop__1em' >

                                    <Link className='link' to='/register'>
                                          Create Account
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

export default Login