import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import Page404 from '../404page/Page404'



// you can call this function anything
const onSuccess = (reference) => {

      // Implementation for whatever you want to do with reference and after success call.
      window.location.replace = '/en/home'
      console.log(reference);
};

// you can call this function anything
const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
}

const PaystackHookExample = () => {

      let { idPackage } = useParams()
      let price = 0
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
                  <button onClick={() => {
                        initializePayment(onSuccess, onClose)
                  }}>PAY NOW</button>
            </div>
      );
};

function Payment() {
      const navigate = useNavigate()
      const { idPackage } = useParams()
      let price = 0
      if (idPackage === 'standard') {
            price = 20000
      }
      else if (idPackage === 'premium') {
            price = 50000
      } else {
            return (<Page404 />)
      }

      return (
            <div className="App">
                  <header className="App-header">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1>Showrage</h1>
                        <p>
                              you're paying &#x20A6;200 for the showrage standad plan
                        </p>

                  </header>
                  <PaystackHookExample />
            </div>
      );
}

export default Payment;