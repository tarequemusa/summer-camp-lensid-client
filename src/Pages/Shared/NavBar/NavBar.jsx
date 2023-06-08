import {Link} from 'react-router-dom';
import NavLogo from '../../../assets/lensid-main-logo.png'


const NavBar = () => {

    const navOptions =
        <>
            <li className='text-green-800 text-lg'><Link to="/">Home</Link></li>
            <li className='text-green-800 text-lg'><Link to="/">Instructor</Link></li>
            <li className='text-green-800 text-lg'><Link to="/">Classes</Link></li>
            <li className='text-green-800 text-lg'><Link to="/">Blogs</Link></li>
        </>

    return (
        <>
            <div className="navbar shadow-xl bg-sky-200 px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <Link to="/"><img className='w-2/5' src={NavLogo} alt="" /></Link>
                        <p className='text-green-950'><small>An Institute of Photography</small></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Dashboard
                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;