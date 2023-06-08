import Lottie from "lottie-react";
import studio from "../../../../public/studio-photography.json";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="p-10 mx-10 mb-12 outline outline-sky-600 rounded-2xl flex items-center justify-center shadow-2xl gap-24 flex-col md:flex-col lg:flex-row text-center">
            <div className="text-center items-center">
                <p className="text-2xl font-semibold">JOIN OUR SCHOOL</p>
                <h2 className="text-2xl font-extrabold my-8">READY TO START LEARNING?
                    SIGN UP NOW!</h2>
                <Link to="signup"><button className="btn btn-outline btn-success px-8 py-8 content-center text-3xl font-semibold">Sign Up</button></Link>
            </div>
            <div className="w-[75%] lg:w-[25%] outline rounded-full bg-white">
                <Lottie animationData={studio} loop={true} />
            </div>
        </div>
    );
};

export default SignUp;