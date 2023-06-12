import {Helmet} from "react-helmet-async";
import useClass from "../../hooks/useClass";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";


const ApprovedClasses = () => {
    const [allClass] = useClass();
    const {user} = useContext(AuthContext);
    const [, refetch] = useCarts();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = singleClass => {
        console.log(user);
        if(user && user.email) {
            const cartCourse = {selectId: singleClass._id, image: singleClass.image, title: singleClass.course_name, fee: singleClass.course_fee, seats: singleClass.seats_available, duration: singleClass.duration, email: user.email}
            fetch('https://summer-camp-lensid-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartCourse)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Course Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the Course?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if(result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }


    return (
        <div>
            <Helmet>
                <title>Approved Classes | LensID An Institute of Photography</title>
            </Helmet>
            <SectionTitle
                subHeading="YOUR ROAD TO BETTER
                PHOTOGRAPHY"
                heading="Approved Classes"
            ></SectionTitle>
            <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {
                        allClass.map((singleClass, index) =>
                            <div key={index} className="flex flex-col md:flex-row lg:flex-row space-x-4 mx-auto lg:px-10">
                                <img className="w-[100%] md:w-[50%] lg:w-[50%] outline outline-gray-300" src={singleClass.image} alt="" />
                                <div className="border-t-2 border-r-2 border-b-2 border-gray-300 p-4">
                                    <h3 className="uppercase font-bold">{singleClass.course_name}</h3>
                                    <p className="py-2">{singleClass.course_intro}</p>
                                    <div className="flex items-center justify-between gap-5">
                                        <div>
                                            <p className="text-green-700 font-semibold">Fee: ${singleClass.course_fee}</p>
                                            <p className="text-green-700 font-semibold py-1">Duration: {singleClass.duration}</p>
                                            <p className="text-green-700 font-semibold">No. of Seats: {singleClass.seats_available}</p>
                                        </div>
                                        <Link><button onClick={() => handleAddToCart(singleClass)} className="btn btn-info btn-sm">Select Course</button></Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ApprovedClasses;