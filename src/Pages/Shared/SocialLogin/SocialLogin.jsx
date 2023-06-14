import {useContext, useState} from "react";
import {AuthContext} from "../../../providers/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";
import {GoogleAuthProvider} from "firebase/auth";



const SocialLogin = () => {
    const {googleProviderLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState();
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL}
                fetch('https://summer-camp-lensid-server-tarequemusa.vercel.app/users', {
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