import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import { Helmet } from 'react-helmet'
import Page404 from '../404page/Page404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fapa, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './style.css'




const PaystackHookExample = () => {
      const navigate = useNavigate()
      const { idPackage } = useParams()
      let price = 0


      const onSuccess = (reference) => {

            navigate('/en/home', { replace: true })
            console.log(reference);
      };

      const onClose = () => {
            console.log('closed')
      }

      //starts checking url params    
      if (idPackage === 'standard') {
            price = 20000
      }
      if (idPackage === 'premium') {
            price = 50000
      }
      const config = {
            reference: (new Date()).getTime().toString(),
            email: "user@example.com",
            amount: price,
            publicKey: 'pk_test_f8f06a773c33804fa470f203ea992ea34b1404fd',
      };
      const initializePayment = usePaystackPayment(config);
      return (
            <div>
                  <button className='select__btn' onClick={() => {
                        initializePayment(onSuccess, onClose)
                  }}>

                        <div className='flex__column'>
                              <FontAwesomeIcon icon={faCreditCard} className='icon' />
                              <p> pay with paystack </p>
                        </div>
                  </button>
            </div>
      );
};

function Payment() {
      // const navigate = useNavigate()
      const { idPackage } = useParams()
      let price = 0
      if (idPackage === 'standard') {
            price = 200
      }
      else if (idPackage === 'premium') {
            price = 500
      } else {
            return (<Page404 />)
      }

      return (
            <div className="">
                  <Helmet>
                        <title>payment || plan || showrage</title>
                        <meta name="theme-color" content="#b2b4bf" />
                  </Helmet>
                  <div className="App__back">
                        <div className='container'>
                              <div className='kontainer'>


                                    <div>
                                          <h1>Payment</h1>
                                          <p className='p_for_pal'>you're paying <strong className='color'> &#8358;{price} </strong> for one month showrage {idPackage} plan. <br /> choose a payment option to continue</p>
                                    </div>
                                    <div className='pay__flex'>
                                          <div className='mg_right_btn'>
                                                {/* <button className='select__btn'>
                                                      <div className='flex__column'>
                                                            <FontAwesomeIcon icon={faCreditCard} className='icon' />
                                                            <p> pay with paystack </p>
                                                      </div>
                                                </button> */}
                                                <PaystackHookExample />
                                          </div>
                                          <div>
                                                <button className='select__btn' onClick={() => { alert('paypal is not available yet') }} >
                                                      <div className='flex__column'>

                                                            <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 384 512"><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" /></svg>
                                                            <p> pay with paypal </p>
                                                      </div>
                                                </button>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>

            </div>
      );
}

export default Payment;