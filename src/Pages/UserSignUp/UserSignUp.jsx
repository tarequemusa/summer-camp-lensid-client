import {useContext, useState} from "react";
import {AuthContext} from "../../providers/AuthProvider";
import {updateProfile} from "firebase/auth";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";
import {useForm} from "react-hook-form";


const UserSignUp = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email, photo: data.photo}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if(data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div className="hero bg-[url('https://i.ibb.co/tMdqH6s/water.png')] bg-cover min-h-screen bg-base-200">
            <Helmet>
                <title>Sign Up | LensID An Institute of Photography</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold mb-10">Start Your Journey With Us!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Your Full Name" {...register("name", {required: true})} name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is Required</span>}
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" {...register("email", {required: true})} name="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is Required</span>}
                        </div>
                        <div>
                            <div className="form-control">
                                <input type="password" placeholder="Password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be one upper, one lower, one number and one special character</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters.</p>}
                            </div>
                            <div className="form-control mt-2">
                                <input type="password" placeholder="Confirm Password" {...register("confirm_password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="confirm_password" className="input input-bordered" />
                                {errors.confirm_password?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}
                                {errors.confirm_password?.type === 'pattern' && <p className="text-red-600">Password must be one upper, one lower, one number and one special character</p>}
                                {errors.confirm_password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.confirm_password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters.</p>}
                            </div>
                            <div className="form-control mt-2">
                                <input type="text" placeholder="Photo URL" {...register("photo", {required: true})} name="photo" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Photo URL is Required</span>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-xl pb-6"><small>Already Have an Account? <br /> Please <Link to="/login"><span className="text-sky-700 font-bold py-20">Login !</span></Link> </small></p>
                </div>
                {/* <p className="text-danger text-center">{error}</p>
                <p className="text-success text center">{success}</p> */}
            </div>
        </div>
    );
};

export default UserSignUp;