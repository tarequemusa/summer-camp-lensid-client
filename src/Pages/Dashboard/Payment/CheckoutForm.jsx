import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = ({fee, cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const {user} = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if(fee > 0) {
            axiosSecure.post('/create-payment-intent', {fee})
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [fee, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }
        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false);

        if(paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                fee,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                status: 'pending',
                itemNames: cart.map(item => item.title)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId) {
                        Swal.fire({
                            title: 'Payment Successful',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                    }
                })

        }
    }

    return (
        <>
            <form className="w-2/3 mx-auto my-12" onSubmit={handleSubmit}>
                <CardElement className="outline outline-1 outline-gray-300 rounded-xl p-6"
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
                <div className="mx-auto my-8">
                    <button className="btn btn-outline btn-primary mx-auto flex justify-center px-8" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
                {cardError && <p className="text-red-600 text-center">{cardError}</p>}
                {transactionId && <p className="text-green-700 text-center text-lg ">Transaction Completed. Transaction ID: {transactionId}</p>}
            </form>

        </>
    );
};

export default CheckoutForm;