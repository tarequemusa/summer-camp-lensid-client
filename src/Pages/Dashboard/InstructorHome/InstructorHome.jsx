import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProvider";


const InstructorHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="w-full px-10 my-8">
            <Helmet>
                <title>Instructor Home | LensID An Institute of Photography Since 2020</title>
            </Helmet>
            <div className="w-full">
                <SectionTitle
                    subHeading="Welocme to Instructor Home"
                    heading="Instructor Dashboard"
                ></SectionTitle>
            </div>
            <div className="card card-side card-actions justify-center items-center bg-base-100 shadow-xl py-12">
                <figure><img className="w-" src={user?.photoURL} alt="profile" /></figure>
                <div className="flex justify-center gap-4 w-full my-12">
                    <h2 className="text-xl"><span className="font-bold text-sky-700">Name: </span>{user.displayName},</h2>
                    <h2 className="text-xl"><span className="font-bold text-sky-700">Email:</span> {user.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;