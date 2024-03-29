import React, { useState, useEffect } from 'react'
import Navbar from '../../../COMPONENTS/Nav/Navbar'
import Input from '../../../COMPONENTS/input/Input'
import logo from '../../../IMG/html5.png'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PillBtn from '../../../COMPONENTS/Button/PillBtn'
import axios from '../../../REQUESTS/backend'
import { Link } from 'react-router-dom';
import '../login/style.css'

const Forgot = () => {


      const [error, setError] = useState({})
      const [serverError, setServerError] = useState('')
      const initialValue = { email: '' }
      const [formvalue, setFormvalue] = useState(initialValue);
      const [loading, setLoading] = useState(false);
      const [isSubmit, setIsSubmit] = useState(false);
      // const auth = useAuth();
      // const navigate = useNavigate();


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
            axios('/account/forgot', data)
                  .then(function (response) {
                        console.log(response);
                  })
                  .catch(function (error) {
                        console.log(error);
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
                  // send()
            }
      }, [error, isSubmit])

      //===
      const validate = (data) => {
            const error = {}

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
                        <form action="" className='dim__form' autoComplete='off' onSubmit={submit}>

                              <div className='center__flex mg__2em'>
                                    <img src={logo} alt='' height={'auto'} width={'50px'} />
                              </div>
                              <div className='error'>
                                    {serverError}
                              </div>
                              <Input
                                    label='email'
                                    icon={<FontAwesomeIcon icon={faEnvelope} className='form__icon' />}
                                    required
                                    name={'email'}
                                    value={formvalue.email}
                                    onChange={onChange}

                              />


                              <PillBtn
                                    text='Reset Password'
                                    loading={loading}

                              />

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

export default Forgot