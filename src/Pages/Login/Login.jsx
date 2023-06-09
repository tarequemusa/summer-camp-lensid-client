import {useContext, useState} from 'react';
import {Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import loginAnimation from "../../../public/login-verification.json";
import {FaGoogle} from "react-icons/fa";
import {AuthContext} from '../../providers/AuthProvider';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../../firebase/firebase.config';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                Navigate(from, {replace: true});
            })
        form.reset();
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }

    return (
        <>
            <Helmet>
                <title>Login | LensID An Institute of Photography</title>
            </Helmet>
            <>
                <div className="text-center mt-12 font-bold px-10 divider">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="hero min-h-screen bg-base-200">
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 content-around gap-12'>
                        <div className='w-[100%] px-10'>
                            <Lottie animationData={loginAnimation} loop={true} />
                        </div>
                        <div className="hero-content flex-col px-10">
                            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Login Now" />
                                    </div>
                                </form>
                                <div>
                                    <div>
                                        <div className='my-3'>
                                            <h5 className='text-center fw-bold divider'>OR</h5>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <button className='mx-2 px-4 text-center rounded-full bg-sky-700 text-white text-light p-3' onClick={handleGoogleSignIn}> <FaGoogle /></button>
                                    </div>
                                </div>
                                <p className="text-center text-2xl my-5"><small>New to Here? Please <Link to="/register"><span className="text-sky-700 font-bold py-20">Register !</span></Link> </small></p>
                                {/* <p className="text-red-700">{error}</p>
                            <p className="text-green-700">{success}</p> */}
                                {/* <SocialLogin></SocialLogin> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Login;