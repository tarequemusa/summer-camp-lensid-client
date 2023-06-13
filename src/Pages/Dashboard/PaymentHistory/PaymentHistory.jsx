import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory";
import {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProvider";


const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory();
    const {user} = useContext(AuthContext);
    return (
        <div className="w-full mx-auto px-10">
            <Helmet>
                <title>Payment History | LensID An Institute of Photography since 2020</title>
            </Helmet>
            <div className="w-full">
                <SectionTitle
                    subHeading="Payment History"
                    heading="All Successful Payment"
                ></SectionTitle>
                <div className="flex justify-between gap-4 w-full my-12 border-b-2">
                    <h2 className="text-xl"><span className="font-bold text-sky-700">Student Name: </span>{user.displayName},</h2>
                    <h2 className="text-xl"><span className="font-bold text-sky-700">Student Email:</span> {user.email}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-center">
                            <tr>
                                <th className="border">Date</th>
                                <th className="border">
                                    Payment ID
                                </th>
                                <th className="border">Amount</th>
                                <th className="border">Quantity</th>
                                <th className="border">Enrolled Student</th>
                                <th className="border">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                paymentHistory.map((item) =>
                                    <tr key={item._id}>
                                        <td className="border">
                                            {item.
                                                date
                                            }
                                        </td>
                                        <td className="border">
                                            {item.
                                                transactionId
                                            }
                                        </td>
                                        <td className="border">
                                            {item.fee}&nbsp; $
                                        </td>
                                        <td className="border">{item.
                                            quantity
                                        }</td>
                                        <td className="border">{item.itemNames.join(', ')}</td>
                                        <td className="border">
                                            {item.status}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;