import {useContext, useState} from "react";
import {AuthContext} from "../../providers/AuthProvider";
import {updateProfile} from "firebase/auth";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";


const UserSignUp = () => {

    const {user, createUser} = useContext(AuthContext);
    console.log(createUser);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(name, email, password, confirm_password, photo);
        event.target.reset();
        // Password Validate:
        if(!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add atleast two numbers');
            return;
        }
        else if(password.length < 6) {
            setError('Please add atleast 6 characters in your password');
            return;
        }

        // Create user in Firebase
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if(loggedUser) {
                    setError('');
                    form.reset();
                    Swal.fire({
                        title: 'User Created Successful',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                    updateUserData(result.user, name);
                }
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);

            })
    }


    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }


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
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Your Full Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your Email" name="email" className="input input-bordered" required />
                        </div>
                        <div>
                            <div className="form-control">
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-2">
                                <input type="password" placeholder="Confirm Password" name="confirm_password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-2">
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center text-xl"><small>Already Have an Account? <br /> Please <Link to="/login"><span className="text-sky-700 font-bold py-20">Login !</span></Link> </small></p>
                    </form>
                </div>
                <p className="text-danger text-center">{error}</p>
                <p className="text-success text center">{success}</p>
            </div>
        </div>
    );
};

export default UserSignUp;