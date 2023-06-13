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
                            <th className="border">
                                Sl.
                            </th>
                            <th className="border">Image</th>
                            <th className="border">Name</th>
                            <th className="border">Category</th>
                            <th className="border">Enrolled Student</th>
                            <th className="border">Status</th>
                            <th className="border">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedClass.map((item, index) =>
                                <tr key={item._id}>
                                    <td className="border">
                                        {index + 1}
                                    </td>
                                    <td className="border">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border">
                                        {item.course_name}
                                    </td>
                                    <td className="border">{item.category}</td>
                                    <td className="border">{item.student_capacity}</td>
                                    <td className="border">
                                        <button className="btn btn-ghost btn-xs">pending/ approved/ denied</button>
                                    </td>
                                    <td className="border">
                                        <button className="btn btn-ghost btn-xs"></button>
                                    </td>
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