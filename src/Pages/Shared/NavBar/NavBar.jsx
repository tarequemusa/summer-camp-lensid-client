import {Link} from 'react-router-dom';
import NavLogo from '../../../assets/lensid-main-logo.png'
import {useContext} from 'react';
import {AuthContext} from '../../../providers/AuthProvider';


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = (event) => {
        event.preventDefault();
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navOptions =
        <>
            <li className='text-green-800 text-lg'><Link to="/">Home</Link></li>
            <li className='text-green-800 text-lg'><Link to="allinstructors">Instructor</Link></li>
            <li className='text-green-800 text-lg'><Link to="approvedclasses">Classes</Link></li>
            <li className='text-green-800 text-lg'><Link to="/">Blogs</Link></li>
            <li className='text-green-800 text-lg'><Link to="login">Login</Link></li>
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
                        <Link to="/"><img className='w-[100%] md:w-[50%] lg:w-[55%]' src={NavLogo} alt="" /></Link>
                        <p className='text-green-950 hidden md:visible lg:collapse'><small>An Institute of Photography</small></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className='navbar-end'>
                    {/* <div className="navbar-end grid sm:grid-flow-col md:grid-flow-col items-center gap-2">
                        {
                            user &&
                            <div className='text-center px-3 py-0'><img className='rounded-full w-3/5' title={user.displayName} src={user.photoURL} alt="" /></div>
                        }
                        {
                            user ? <>
                                <span>{user.email}</span> <Link to='/'><button onClick={handleLogOut} className='btn btn-sm'> Log Out</button></Link> </> : <button className='px-2 btn btn-sm'><Link to='/login'>Login</Link></button>

                        }
                    </div> */}
                    <div className="dropdown dropdown-end flex items-center gap-3 justify-end">
                        {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full" title={user.displayName}>
                                <img src={user.photoURL} />
                            </div>
                        </label>}
                        {
                            user ? <>
                                <Link to='/'><button onClick={handleLogOut} className='btn btn-sm btn-secondary btn-outline rounded-full'> Log Out</button></Link> </> : <button className='px-4 btn btn-outline btn-primary rounded-xl'><Link to='/login'>Login</Link></button>

                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;