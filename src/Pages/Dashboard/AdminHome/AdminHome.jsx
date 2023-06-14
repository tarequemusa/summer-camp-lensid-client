import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProvider";


const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="w-full px-10 mb-8">
            <Helmet>
                <title>Admin Home | LensID An Institute of Photography</title>
            </Helmet>
            <div className="w-full">
                <SectionTitle
                    subHeading="Welocme to Admin Home"
                    heading="Admin Dashboard"
                ></SectionTitle>
            </div>
            <div className="card card-side card-actions flex justify-center items-center shadow-xl py-12">
                <figure><img className="rounded-xl w-[25%]" src={user?.photoURL} alt="Movie" /></figure>
                <div className="flex justify-center gap-4 w-full my-12">
                    <h2 className="text-xl"><span className="font-bold text-sky-700">Name: </span>{user.displayName},</h2>
                    <h2 className="text-xl"><span className="font-bold text-sky-700">Email:</span> {user.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;