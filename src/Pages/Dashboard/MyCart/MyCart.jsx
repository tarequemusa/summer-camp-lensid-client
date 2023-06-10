import {Helmet} from "react-helmet-async";
import useCarts from "../../../hooks/useCarts";
import {FaTrash} from "react-icons/fa";


const MyCart = () => {
    const [cart] = useCarts();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.fee + sum, 0);
    return (
        <div>
            <Helmet>
                <title>My Selected Class | LensID An Institute of Photography</title>
            </Helmet>
            <div className="flex items-center justify-evenly uppercase font-bold">
                <h2 className="text-3xl">Total Order: {cart.length},</h2> &nbsp;
                <h2 className="text-3xl">Total Price:$ {total.toFixed(2)},</h2>&nbsp;
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Photo & Title</th>
                            <th>Course Fee</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>

                                <tr key={item._id} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image
                                                    } alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.fee}
                                    </td>
                                    <td className="text-lg text-red-500"><FaTrash /></td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">Pay</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyCart;