import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Ie0fPEQ5QOOV20wRI0DTelwjySMWQfeDXrXCESrVc0hGXNYMAzxTVmprNqflkGKLUEc0MhnP9Ki9KClaja3qSnz00doqK8Nm7');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
    );
};

export default ProcessPayment;