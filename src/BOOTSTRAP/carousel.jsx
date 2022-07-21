import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence,  } from 'framer-motion';
import './style.css'
import img from '../img/img1.jpg';
import { useState } from 'react';

const content ={
      visible: {opacity : 1,
        x: '0',
        transition: {delay: 0.5}
      },
      hide: {x : '-100vw',
      opacity: 0
      },
      exit: {rotateZ: '360deg', scale: [1.1,0.9,1.1,1,0.8,0.9,0.5,0.7,0.2]}   
     }


const Carousel = ({show,setShow}) => {
      const data = [{
            image: require('../img/img1.jpg')
},{
            image: require('../img/img2.jpg')
},{
            image: require('../img/img3.jpg')
}]
     
      const [current,setCurrent] = useState(0);
      const next = () => {
            setCurrent(current === data.length - 1 ? 0 : current + 1)
      }
      const prev = () =>{
            setCurrent(current === 0 ? data.length - 1  : current - 1)
      }
      const dot = (index) => {
            setCurrent(index);
      }
      if(!Array.isArray(data) || data.length <= 0 ){
            return null;
      }
      return(
            <AnimatePresence exitBeforeEnter>
            { show && (
            <div className='carousel'>
                  <FontAwesomeIcon icon={faTimes} onClick={() => setShow(false) } className='icon close'/>
                <div className='LoHkas'>
                  <div className='cont'>
                        
                        <div className='spanCont'>
                              {data.map((item,index) => {
                                    return (<span className={current === index ? 'dotActive' : 'dot' } key={index} onClick={() => dot(index)} ></span>) 
                              }) }
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className='R icon' onClick={next}/>
                        <FontAwesomeIcon icon={faChevronLeft} className='L icon'  onClick={prev}/>

                         {
                               data.map((item,index) => {
                                     return(<div className={current === index ? 'slide active' : 'slide'} key={index} >
                                          { index === current && ( <img src={item.image} alt=''  className='img' width={'100%'}/> ) }  
                                     </div>)
                               })
                         }
                  </div>
                  </div>
            </div>
       )} 
       </AnimatePresence>
       ) 
}

export default Carousel