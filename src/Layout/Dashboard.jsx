import {FaCreditCard, FaHome, FaSchool, FaSearchLocation, FaShoppingCart, FaUser, FaUserCircle} from "react-icons/fa";
import {NavLink, Outlet} from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCarts();

    // const isAdmin = true;
    // const isStudent = true;

    const [isAdmin] = useAdmin();



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-sky-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/"><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to="/"><FaSchool />Manage Classes</NavLink></li>
                            <li><NavLink to="allusers"><FaUser />Manage Users</NavLink></li>
                            <li><NavLink to="/"><FaSearchLocation />Contact</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to="/dashboard"><FaHome />My Home</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycart"><FaUserCircle />My Selected Classes <div className="badge inline badge-secondary">+{cart?.length || 0}</div></NavLink>

                                </li>
                                <li><NavLink to="/dashboard/bookedclasses"><FaShoppingCart />My Enrolled Classes</NavLink></li>
                                <li><NavLink to="/dashboard/paymenthistory"><FaCreditCard />Payment</NavLink></li>

                            </>
                        // <><div className="divider"></div>
                        //     <li><NavLink to="/"><FaHome />Instructor Home</NavLink></li>
                        //     <li><NavLink to="/"><FaSchool />Add a Class</NavLink></li>
                        //     <li><NavLink to="/"><FaUser />My Class</NavLink></li>
                        //     <li><NavLink to="/"><FaSearchLocation />Contact</NavLink></li></>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/approvedclasses"><FaSchool />Classes</NavLink></li>
                    <li><NavLink to="/"><FaUser />Instructors</NavLink></li>
                    <li><NavLink to="/"><FaSearchLocation />Contact</NavLink></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;