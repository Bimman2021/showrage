import React, { useState, useEffect } from 'react'
import Navbar from '../../../COMPONENTS/Nav/Navbar'
import Input from '../../../COMPONENTS/input/Input'
import logo from '../../../IMG/html5.png'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PillBtn from '../../../COMPONENTS/Button/PillBtn'
import Switch from '../../../COMPONENTS/switch/Switch'
import { Link } from 'react-router-dom';
import './style.css'

const Login = () => {
      const [error, setError] = useState({})
      const initialValue = { email: '', pass: '' }
      const [formvalue, setFormvalue] = useState(initialValue);
      const [loading, setLoading] = useState(false);
      const [isSubmit, setIsSubmit] = useState(false);
      // const auth = useAuth();
      // const navigate = useNavigate();


      //===
      // const send = () => {
      //       axios.post(url, {
      //             action: 'login',
      //             values: value
      //       }).then(function (response) {
      //             setLoading(false)

      //       }).catch(function (error) {
      //             console.log(error);
      //       });
      // }
      //===
      const onChange = (e) => {
            const { name, value } = e.target;
            setFormvalue({ ...formvalue, [name]: value });
            setError({ ...error, [name]: '' })

      }
      //===
      useEffect(() => {
            if (Object.keys(error).length === 0 && isSubmit) {
                  setLoading(true)
                  // send()
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
                  <Navbar />
                  <div className=''>
                        <form action="" className='dim__form' autoComplete='off' onSubmit={submit} >
                              <div className='center__flex mg__2em'>
                                    <img src={logo} alt='' height={'auto'} width={'50px'} />
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