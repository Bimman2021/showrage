import React, { useState, useEffect } from 'react'
import Navbar from '../../../COMPONENTS/Nav/Navbar'
import Input from '../../../COMPONENTS/input/Input'
import logo from '../../../IMG/html5.png'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PillBtn from '../../../COMPONENTS/Button/PillBtn'
import axios from '../../../REQUESTS/backend'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../../AUTH/index'
import { useNavigate } from 'react-router-dom'
import '../login/style.css'


const Verifyemail = () => {

  const auth = useAuth();
  const navigate = useNavigate();
  const { email, vcode } = auth.vcode;
  const [error, setError] = useState({})
  const [serverError, setServerError] = useState('')
  const initialValue = { email: '', code: '' }
  const [formvalue, setFormvalue] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);





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
    axios('/account/verifyemail', data)
      .then(function (response) {
        if (response.data.message === 'successful') {
          setLoading(false)
          navigate('/success', { replace: true })
        } else {
          alert('something went wrong try again')
          navigate('/login', { replace: true })
        }
      })
      .catch(function (err) {
        setLoading(false)
        alert('something went wrong try again')
        navigate('/register', { replace: true })
      });
  }

  //===
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });

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

    if (!data.code) {
      error.cd = "enter verification code";
    } else if (data.code.length !== 6) {
      error.cd = "fill in a valid verification code";
    }

    return error

  }
  const submit = (e) => {
    e.preventDefault()
    setFormvalue({ ...formvalue, email: email })
    setError(validate(formvalue))
    if (formvalue.code === vcode) {
      setIsSubmit(true)

    }


  }

  return (
    <div className='lmsf__cont'>
      <Navbar />
      <div className=''>
        <form action="" className='dim__form' autoComplete='off' onSubmit={submit}>

          <div className='center__flex mg__2em'>
            <img src={logo} alt='' height={'auto'} width={'50px'} />
          </div>
          <p className='kis8'>we sent a verification code to your email <strong>{email}</strong> kindly check your email for verification code to continue </p>

          <div className='error'>
            {serverError}
          </div>
          <Input
            label='verification code'
            icon={<FontAwesomeIcon icon={faEnvelope} className='form__icon' />}
            required
            type={'number'}
            error={error.cd}
            name={'code'}
            value={formvalue.code}
            onChange={onChange}

          />


          <PillBtn
            text='verify email'
            loading={loading}

          />

          <div className='btw__flex mgTop__1em' >
            <Link className='link' to=''>
              Need help ?
            </Link>

          </div>

        </form>


      </div>

    </div>
  )
}

export default Verifyemail