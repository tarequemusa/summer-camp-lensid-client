import {FaCreditCard, FaHome, FaSchool, FaShoppingCart, FaUser, FaUserCircle} from "react-icons/fa";
import {Link, NavLink, Outlet} from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";
import useInstructorDash from "../hooks/useInstructorDash";
import {AuthContext} from "../providers/AuthProvider";
import {useContext} from "react";
import NavLogo from '../../src/assets/lensid-main-logo.png'


const Dashboard = () => {
    const [cart] = useCarts();
    const {user, logOut} = useContext(AuthContext);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorDash();

    const handleLogOut = (event) => {
        event.preventDefault();
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="w-full navbar bg-sky-300 px-10 flex justify-between">
                <div>
                    <Link to="/"><img className='w-[50%] md:w-[50%] lg:w-[55%]' src={NavLogo} alt="" /></Link>
                    <p className='text-green-950 hidden md:visible lg:collapse'><small>An Institute of Photography</small></p>
                </div>
                <div>
                    {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-20 outline outline-gray-400 rounded-full" title={user?.displayName}>
                            <img src={user?.photoURL} />
                        </div>
                    </label>}
                </div>
            </div>
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
                                <h3 className="text-2xl font-bold text-black bg-gray-200 px-2">Admin Dashboard</h3>
                                <li><NavLink to="/dashboard"><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaSchool />Manage Classes</NavLink></li>
                                <li><NavLink to="allusers"><FaUser />Manage Users</NavLink></li>
                            </> :
                                isInstructor ?
                                    <>
                                        <h3 className="text-2xl font-bold text-black bg-gray-200 px-2">Instructor Dashboard</h3>
                                        <li><NavLink to="/dashboard"><FaHome />Instructor Home</NavLink></li>
                                        <li><NavLink to="/dashboard/addclass"><FaSchool />Add a Class</NavLink></li>
                                        <li><NavLink to="/dashboard/myclass"><FaUser />My Class</NavLink></li>
                                    </> :
                                    <>
                                        <h3 className="text-2xl font-bold text-black bg-gray-200 px-2">Student Dashboard</h3>
                                        <li><NavLink to="/dashboard"><FaHome />My Home</NavLink></li>
                                        <li>
                                            <NavLink to="/dashboard/mycart"><FaUserCircle />My Selected Classes <div className="badge inline badge-secondary">+{cart?.length || 0}</div></NavLink>

                                        </li>
                                        <li><NavLink to="/dashboard/bookedclasses"><FaShoppingCart />My Enrolled Classes</NavLink></li>
                                        <li><NavLink to="/dashboard/paymenthistory"><FaCreditCard />Payment</NavLink></li>

                                    </>
                        }
                        <div className="divider"></div>
                        <div className="bg-orange-300 text-black py-2 gap-8">
                            <h3 className="text-2xl font-bold text-black bg-gray-200 px-2">Go Back</h3>
                            <li><NavLink to="/"><FaHome />Home</NavLink></li>
                            <li><NavLink to="/approvedclasses"><FaSchool />Classes</NavLink></li>
                            <li><NavLink to="/allinstructors"><FaUser />Instructors</NavLink></li>
                            {
                                user &&
                                <Link to='/'><button onClick={handleLogOut} className='btn btn-sm btn-outline rounded-full mx-2'> Log Out</button></Link>
                            }
                        </div>
                    </ul>

                </div>
            </div >
        </>
    );
};

export default Dashboard;