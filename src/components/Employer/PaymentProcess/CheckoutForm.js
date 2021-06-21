import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [payError, setPayError] = useState(null);
  const [paySuccess, setPaySuccess] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPayError(error.message);
      setPaySuccess(null);
    } else {
      const id = paymentMethod.id;
      setPaySuccess(paymentMethod.id);
      const {support, notification, hours, plan, cost} = props.package;
      handleData({support, notification, hours, plan, cost, id})
      setPayError(null);
    }
  };

  // store data in mongodb
  const handleData = (dataPayment) => {

    axios.post('http://localhost:5055/paymentStatus',dataPayment);

  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} className='btn btn-outline-success mt-5 font-weight-bolder px-4'>
        Pay Now
      </button>
      {
        payError && <h1 className="text-danger my-4">{payError}</h1>
        ||
        paySuccess && <div>
          <h4 className="text-success my-4">Booking Successful ! Your payment ID :  {paySuccess}</h4>
          {
            paySuccess && setTimeout(() => {
              history.push(`/employer-profile/${paySuccess}`)
            }, 4000)
          }
        </div>
      }
    </form>
  );
};

export default CheckoutForm;