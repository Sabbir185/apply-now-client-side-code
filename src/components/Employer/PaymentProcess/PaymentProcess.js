import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import './PaymentProcess.css'

const stripePromise = loadStripe('pk_test_51IeLQQJvn90Urdz7TTW8LBbHX1k1LUFWgveadGfsJKGdiI95E1m6DKTJW9NjGgSM58J5mtzhq3FbvTs9PzLFI0nk00j42bLZfM');

const PaymentProcess = (props) => {
    const { cost, plan, hours } = props.packages;


    return (
        <div className='text-center'>
            <h4 className="mt-5">You've Selected, <strong><span className="text-success">{plan}</span></strong> Plan</h4>

            <div className='payment-card'>
                <form>
                    <label htmlFor="hr" className='mt-5'>Able to post a job per month (hours) </label>
                    <input type="text" defaultValue={hours} name='hr' className="form-control w-50 mx-auto text-center font-weight-bolder" />

                    <label htmlFor="hr" className='mt-3'>Total Cost (USD)</label>
                    <input type="text" defaultValue={cost} name='hr' className="form-control w-50 mx-auto text-center font-weight-bolder" />
                </form>

                <h4 className="mt-4">Stripe Payment</h4>
                <div className='w-50 mb-3 mt-5 mx-auto'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm package={props.packages}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentProcess;