import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {FaChalkboardTeacher, FaTrash, FaUserShield} from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const {data: users = [], refetch} =
        useQuery(['users'], async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        })

    const handleMakeInstructor = user => {
        setIsButtonDisabled(true);
        fetch(`http://localhost:5000/users/instructor/${ user }`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `This user is an Instructor Now`,
                        showConfirmButton: false,
                        background: '#EAECEE',
                        timer: 1500
                    })
                }
            })

    }
    const handleMakeAdmin = user => {
        setIsButtonDisabled(true);
        fetch(`http://localhost:5000/users/admin/${ user._id }`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${ user.name } is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

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
                fetch(`http://localhost:5000/users/${ item._id }`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="w-full px-10">
            <Helmet>
                <title>All Users | LensID An Institute of Photography</title>
            </Helmet>
            <div className="flex justify-end">
                <button className=" outline outline-gray-300 rounded-xl p-4 my-5">
                    <h3 className="text-2xl font-semibold "> Total Users: {users.length}</h3>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-sky-200 text-center">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td><button onClick={() => handleMakeInstructor(user._id)} disabled={user.role === 'instructor'} className="btn btn-ghost btn-md text-sky-600" title="Instructor">{user.role === 'instructor' ? 'instructor' : <FaChalkboardTeacher />}</button></td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(user)} disabled={user.role === 'admin'} className="btn btn-ghost btn-md" title="Admin">{user.role === 'admin' ? 'admin' : <FaUserShield />}</button>
                                    </td>
                                    <td className="text-lg text-red-500"><button onClick={() => handleDelete(user)} className="btn btn-ghost"><FaTrash /></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;