import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory";


const EnrolledClasses = () => {
    const [paymentHistory] = usePaymentHistory();
    return (
        <div className="w-full px-10">
            <div>
                <Helmet>
                    <title>Enrolled Class | LensID An Institute of Photography since 2020</title>
                </Helmet>
                <div className="w-full">
                    <SectionTitle
                        subHeading="Enrolled Class"
                        heading="All Enrolled Classes"
                    ></SectionTitle>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-center border">
                            <tr className="bg-sky-200 font-bold text-lg">
                                <th className="border">Sl.</th>
                                <th className="border">
                                    Quantity
                                </th>
                                <th className="border">Enrolled Classes</th>
                                <th className="border">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                paymentHistory.map((item, index) =>
                                    <tr key={item._id}>
                                        <td className="border">
                                            {index + 1
                                            }
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

export default EnrolledClasses;