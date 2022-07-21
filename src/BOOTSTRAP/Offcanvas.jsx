//import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const bgdrop = {
  visible: { opacity: 1 },
  hide: { opacity: 0 }
}

const content = {
  visible: {
    x: '0',
  },
  hide: {
    x: '100%',
  },
  transition: { delay: 1 },
  exit: {
    x: '200%'
  }
}
export default function OffCanvas({ showModal, setshowModal, component }) {

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className='canvasContainer'
          variants={bgdrop}
          initial="hide"
          animate="visible"
          exit="exit"
        >
          <motion.div className='canvas'
            variants={content}
          >
            <div className='header'>
              <div>showRage</div>

              <FontAwesomeIcon icon={faTimes} className='icon' onClick={() => setshowModal(false)} />
            </div>
            <div className='body'>
              {component}
            </div>
          </motion.div>
        </motion.div>
      )
      }
    </AnimatePresence>

  )
}



