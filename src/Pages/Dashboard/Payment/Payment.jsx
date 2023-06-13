import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import useCarts from "../../../hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCarts();
    const total = cart.reduce((sum, item) => sum + item.fee, 0);
    const fee = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <div>
                <Helmet>
                    <title>Payment | LensID An Institute of Photography since 2020</title>
                </Helmet>
                <div className="w-full">
                    <SectionTitle
                        subHeading="Pay Your Course Fees"
                        heading="Payment Section"
                    ></SectionTitle>
                </div>
            </div>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} fee={fee}></CheckoutForm>
            </Elements>


        </div>
    );
};

export default Payment;