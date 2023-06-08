import {Link, useRouteError} from 'react-router-dom'
// import useTitle from '../../Hooks/useTitle';
import Lottie from "lottie-react";
import lottie404 from "../../../public/lottie-404-error.json";

const Error = () => {
    const {error, status} = useRouteError();
    // useTitle('404')
    return (
        <>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
                <div>
                    <div className='text-center mt-5 rounded-xl w-full'>
                        <Lottie animationData={lottie404} loop={true} />
                        <div>
                            <h2 className='fw-bold text-4xl text-orange-500'>
                                <span className='text-8xl font-extrabold text-red-700'> </span>
                            </h2>
                            <p className='text-2xl font-semibold md:text-3xl text-warning-800 mt-8 mb-8'>
                                {error?.message}
                            </p>
                            <Link to='/' className='btn btn-info shadow bg-sky-700 rounded text-white p-3 mb-5'>
                                BACK TO HOMEPAGE
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Error;