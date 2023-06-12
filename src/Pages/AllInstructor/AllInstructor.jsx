import {Helmet} from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useInstructor from "../../hooks/useInstructor";
import {FaEnvelope, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";


const AllInstructor = () => {
    const [instructors] = useInstructor();
    return (
        <div>
            <Helmet>
                <title>All Instructors | LensID An Institute of Photography</title>
            </Helmet>
            <SectionTitle
                subHeading="LEARN HOW TO CULTIVATE BEAUTIFUL MEMORIES FOR YOUR CLIENT FAMILIES"
                heading="Instructors"
            ></SectionTitle>
            <div className="my-12 px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        instructors.map((instructor, index) =>

                            <div key={index} className="card outline outline-gray-200 bg-base-100 shadow-xl">
                                <figure className="px-5 pt-5">
                                    <img src={instructor.profile_image} alt="Instructor" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{instructor.instructor_name}</h2>
                                    <p className="flex items-center justify-between"><FaEnvelope />&nbsp;  {instructor.email}</p>
                                    <div className="flex">
                                        <p className="flex items-center justify-stretch"><FaUser />&nbsp; {instructor.enrolled_students}</p>, &nbsp;
                                        <p>No. of Classes: {instructor.total_classes}</p>
                                    </div>
                                    <p><span className="font-bold">Class Name:</span> {instructor.name_classes.join(', ')}</p>
                                    <div className="card-actions justify-end">
                                        <Link to="/seeclasses"><button className="btn btn-primary">See Classes</button></Link>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default AllInstructor;