import {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";



const SocialLogin = () => {
    const {googleProviderLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
        googleProviderLogin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = {name: loggedInUser.name, email: loggedInUser.email};
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


            })
    }

    return (
        <div>
            <div className='divider'></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;