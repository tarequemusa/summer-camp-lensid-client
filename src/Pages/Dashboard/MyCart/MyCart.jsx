import {Helmet} from "react-helmet-async";
import useCarts from "../../../hooks/useCarts";
import {FaTrash} from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCarts();
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
                fetch(`http://localhost:5000/carts/${ item._id }`, {
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
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-hidden">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-sky-200 text-center">
                        <tr>
                            <th>Sl.</th>
                            <th>Photo & Title</th>
                            <th>Course Fee</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
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
                                    <td>
                                        <button className="btn btn-ghost btn-md text-green-600">Pay</button>
                                    </td>
                                    <td className="text-lg text-red-500"><button onClick={() => handleDelete(item)} className="btn btn-ghost"><FaTrash /></button></td>
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