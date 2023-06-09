import {FaBook, FaEnvelope, FaRestroom, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";


const InstructorItems = ({items}) => {

    console.log(items.instructor_name);
    return (
        <div className="flex justify-center flex-col md:flex-col lg:flex-row px-10 gap-8 mx-auto">
            {
                items.map((item, index) =>

                    <div key={index} item={item} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img src={item.profile_image} alt="Instructor" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.instructor_name}</h2>
                            <p className="flex items-center"><FaEnvelope />  {item.email}</p>
                            <p className="flex items-center"><FaUser />{item.enrolled_students}</p>
                            <p>No. of Classes: {item.total_classes}</p>
                            <p>Class Name: {item.name_classes}</p>
                            <div className="card-actions justify-end">
                                <Link to="/seeclasses"><button className="btn btn-primary">See Classes</button></Link>
                            </div>
                        </div>
                    </div>
                )}


        </div>

    );
};

export default InstructorItems;