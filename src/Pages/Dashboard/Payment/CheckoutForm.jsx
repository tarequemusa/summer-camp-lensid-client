import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }
    }

    return (
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
            <div className="py-8">
                <button className="btn btn-outline btn-primary mx-auto flex justify-center px-8" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;