import {useContext, useState} from 'react';
import {Link, useLocation, useNavigate, } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import loginAnimation from "../../../public/login-verification.json";
import {FaGoogle, FaLock} from "react-icons/fa";
import {AuthContext} from '../../providers/AuthProvider';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import {app} from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const {signIn, googleProviderLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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
                navigate(from, {replace: true});
            })
        form.reset();
    }

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, {replace: true});
                    })
                setUser(loggedUser);

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
                <div className="hero bg-[url('https://i.ibb.co/tMdqH6s/water.png')] bg-cover min-h-screen bg-base-200">
                    <div className="text-center mt-12 font-bold px-10 divider items-center">
                        <h1 className="flex flex-row text-4xl font-bold mx-auto"><span className='text-red-600 outline rounded-full p-2'><FaLock /></span>&nbsp; Login Now ! </h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 content-around gap-12 mt-24'>
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
                                            <h5 className='text-center fw-bold divider'>OR sign in with</h5>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <button className='mx-2 text-center rounded-full bg-sky-700 text-white text-xl px-4 py-4' onClick={handleGoogleSignIn}> <FaGoogle /></button>
                                    </div>
                                </div>
                                <p className="text-center text-xl my-5"><small>New to Here? Please <Link to="/signup"><span className="text-sky-700 font-bold py-20">Register !</span></Link> </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Login;