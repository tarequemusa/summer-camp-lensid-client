import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useMyAddedClass from "../../../../hooks/useMyAddedClass";
import {useContext} from "react";
import {AuthContext} from "../../../../providers/AuthProvider";



const MyClass = () => {
    const [addedClass] = useMyAddedClass();
    const {user} = useContext(AuthContext);


    return (
        <div>
            <Helmet>
                <title>My Added Class | LensID An Institute of Photography</title>
            </Helmet>
            <SectionTitle
                subHeading="My All Photography Classes"
                heading="Added Class"
            ></SectionTitle>
            <div className="flex justify-between gap-4 w-full my-12 border-b-2">
                <h2 className="text-xl"><span className="font-bold text-sky-700">Instructor Name: </span>{user.displayName},</h2>
                <h2 className="text-xl"><span className="font-bold text-sky-700">Instructor Email:</span> {user.email}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl.
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Enrolled Student</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedClass.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.course_name}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.student_capacity}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">pending/ approved/ denied</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"></button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClass;