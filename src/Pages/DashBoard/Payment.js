import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1DprCocrPsKOt6bqlHnY9u0bzi6gwBs362ufNt42p8bKYYCI9YVE5nVPhJDUqCa54bCL0v0JV9emQcreUyIm2c00glvakKz8')

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const [payment, setPayment] = useState('');

    useEffect( ()=>{
        fetch(url, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setPayment(data))
    } ,[url])

  

    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {payment?.userName}</p>
                <h2 class="card-title">Pay for :<span className="text-success font-bold">{payment?.partsName}</span></h2>
                <p >Please pay: <span className='text-xl font-bold'>{payment?.price}</span></p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment}/>
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;