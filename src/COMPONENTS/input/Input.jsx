import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../style.css'


const Input = ({ type, label, icon, error, required, autocomplete, value, onChange, name, }) => {
      return (
            <div>
                  <div className='form__control'>
                        <div className='icon__flex'>
                              {icon ? icon : <FontAwesomeIcon icon={faUser} className='form__icon' />}
                              <input
                                    type={type ? type : 'text'}
                                    className='nmx__input'
                                    placeholder={label ? label : 'username'}
                                    required={required ? true : false}
                                    autoComplete={autocomplete}
                                    value={value}
                                    name={name}
                                    aria-label={label}
                                    onChange={onChange}
                              />
                        </div>
                        <div className='form__error'>
                              {error}
                        </div>
                  </div>

            </div>
      )
}

export default Input