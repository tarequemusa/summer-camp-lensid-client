import {Link} from "react-router-dom";


const ClassItems = ({item}) => {
    const {course_name, image_link, course_fee, course_intro, duration, seats_available} = item;
    return (
        <div className="flex space-x-4 mx-auto lg:px-10">
            <img className="w-2/5" src={image_link} alt="" />
            <div className="outline p-4">
                <h3 className="uppercase font-bold">{course_name}</h3>
                <p className="py-2">{course_intro}</p>
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <p className="text-green-700 font-semibold">Fee: ${course_fee}</p>
                        <p className="text-green-700 font-semibold py-1">Duration: {duration}</p>
                        <p className="text-green-700 font-semibold">No. of Seats: {seats_available}</p>
                    </div>
                    <Link to="/"><button className="btn btn-info btn-sm">Select Course</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassItems;