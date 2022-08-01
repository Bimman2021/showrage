import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import '../style.css'
// import { faLock } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PillBtn = ({ text, icon, loading, style, onClick }) => {
      return (
            <div className='pill__cont'>

                  <button onClick={onClick} style={style} className='pill__btn' disabled={loading ? true : false} >
                        {icon && <div className='mg__right'>
                              icon
                        </div>}
                        {loading ?
                              <CircularProgress style={{ height: '20px', width: '20px' }} color="inherit" /> :
                              <span>{text ? text : 'submit'}</span>
                        }
                  </button>

            </div>
      )
}

export default PillBtn