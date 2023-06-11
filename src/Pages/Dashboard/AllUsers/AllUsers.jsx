import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import {FaChalkboardTeacher, FaTrash, FaTrashAlt, FaUserPlus, FaUserShield} from "react-icons/fa";


const AllUsers = () => {
    const {data: users = [], refetch} =
        useQuery(['users'], async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        })

    const handleMakeInstructor = id => {

    }
    const handleMakeAdmin = id => {

    }

    const handleDelete = user => {

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
                                    <td><button onClick={() => handleMakeInstructor(user._id)} className="btn btn-ghost btn-lg" title="Instructor">{user.role === 'instructor' ? 'instructor' : <FaChalkboardTeacher />}</button></td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-lg" title="Admin">{user.role === 'admin' ? 'admin' : <FaUserShield />}</button>
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