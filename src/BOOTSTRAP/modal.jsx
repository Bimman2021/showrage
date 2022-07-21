import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './style.css'

const bgdrop = {
  visible: { opacity: 1 },
  hide: { opacity: 0 }
}

const content = {
  visible: {
    opacity: 1,
    y: '0',
    transition: { delay: 0.5 }
  },
  hide: {
    y: '-100vh',
    opacity: 0
  },
  exit: { rotateZ: '360deg', scale: [1.1, 0.9, 1.1, 0.5, 0.7, 0.2] }
}
const content2 = {
  visible: {
    opacity: 1,
    y: '0',
    transition: { delay: 0.5 }
  },
  hide: {
    y: '200vh',
    opacity: 0
  },
  exit: { y: '200vh' }
}


export function Modal2({ showModal, setShowModal, component }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className='backdrop2'
          variants={bgdrop}
          initial="hide"
          animate="visible"
          exit='exit'
        >
          <motion.div className='content2'
            variants={content2}

          >
            <div className='modalHeader' onClick={() => setShowModal(false)}>
              <span className="icon" >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>




            {component}

          </motion.div>
        </motion.div>
      )

      }
    </AnimatePresence>

  )
}

const Modal = ({ showModal, setShowModal, component, nav, style }) => {
  const navigate = useNavigate();
  const set = () => {
    setShowModal(false)
  }
  const navMove = () => {
    navigate(nav)
  }
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className='backdrop'
          variants={bgdrop}
          initial="hide"
          animate="visible"
          exit="exit"
        >

          <motion.div className='content'
            style={style}
            variants={content}
          >
            <div className='modalHeader'>
              <span className="icon" onClick={nav === undefined ? set : navMove} >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>




            {component}

          </motion.div>
        </motion.div>
      )

      }
    </AnimatePresence>

  )
}


export const Modalflat = ({ showModal, setShowModal, component, nav }) => {
  const navigate = useNavigate();
  const set = () => {
    setShowModal(false)
  }
  const navMove = () => {
    navigate(nav)
  }
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className='backdrop'
          variants={bgdrop}
          initial="hide"
          animate="visible"
          exit="exit"
        >

          <motion.div className='content__f'
            variants={content}
          >
            <div className='modalHeader'>
              <span className="icon" onClick={nav === undefined ? set : navMove} >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>




            {component}

          </motion.div>
        </motion.div>
      )

      }
    </AnimatePresence>

  )
}

export default Modal