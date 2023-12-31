import {Helmet} from "react-helmet-async";
import useCarts from "../../../hooks/useCarts";
import {FaCheckCircle, FaClock, FaTrash} from "react-icons/fa";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProvider";


const MyCart = () => {
    const [cart, refetch] = useCarts();
    const {user} = useContext(AuthContext);
    console.log(cart);
    const total = cart.reduce((sum, item) => item.fee + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(result.isConfirmed) {
                fetch(`https://summer-camp-lensid-server-tarequemusa.vercel.app/carts/${ item._id }`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Selected Course has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full p-10 mx-auto">
            <Helmet>
                <title>My Selected Class | LensID An Institute of Photography</title>
            </Helmet>
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-evenly uppercase font-bold mb-12">
                <h2 className="text-3xl">Total Order: {cart.length},</h2> &nbsp;
                <h2 className="text-3xl">Total Price:$ {total.toFixed(2)},</h2>&nbsp;
                <Link to="/dashboard/payment"><button className="btn btn-primary">Pay</button></Link>
            </div>
            <div className="overflow-hidden">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-sky-200 text-center">
                        <tr className="bg-sky-200 font-bold text-lg">
                            <th className="border">Sl.</th>
                            <th className="border">Photo & Title</th>
                            <th className="border">Course Fee</th>
                            <th className="border">Email</th>
                            <th className="border">Available Seats</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            cart.map((item, index) =>

                                <tr key={item._id} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td className="border">
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
                                    <td className="border">
                                        {item.fee}
                                    </td>
                                    <td className="border">
                                        {user?.email}
                                    </td>
                                    <td className="border">
                                        {item.seats}
                                    </td>
                                    <td className="text-lg border text-red-500"><button onClick={() => handleDelete(item)} className="btn btn-ghost"><FaTrash /></button>
                                        <div className="flex justify-center items-center border-t-2">
                                            <div><button className="btn btn-ghost btn-sm text-green-700" title="Approve"><FaCheckCircle /></button></div>
                                            <div><button className="btn btn-ghost btn-sm outline-2 p-2 outline-red-700 text-red-700" title="Deny">X</button></div>
                                            <div><button className="btn btn-ghost btn-sm text-yellow-500" title="Pending"><FaClock /></button></div>
                                        </div>
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