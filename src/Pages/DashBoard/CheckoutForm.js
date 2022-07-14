import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const[cardError, setCardError] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

       

        if (!stripe || elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('')

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: patientName,
                        // email: patient
                    },
                },
            },
        );

        if(intentError){
            setCardError(intentError.message)
        }
        else{
            setCardError('')
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats !! Your Payment is completed')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;