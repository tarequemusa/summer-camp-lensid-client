
const ClassItems = ({item}) => {
    const {course_name, image, course_fee, course_intro, duration, seats_available} = item;
    return (
        <div className="flex flex-col md:flex-row lg:flex-row space-x-4 mx-auto px-10 md:px-10 lg:px-10">
            <img className="w-[100%] md:w-[50%] lg:w-[50%]" src={image} alt="" />
            <div className="border-t-2 border-r-2 border-b-2 border-gray-300 p-4">
                <h3 className="uppercase font-bold">{course_name}</h3>
                <p className="py-2">{course_intro}</p>
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <p className="text-green-700 font-semibold">Fee: ${course_fee}</p>
                        <p className="text-green-700 font-semibold py-1">Duration: {duration}</p>
                        <p className="text-green-700 font-semibold">No. of Seats: {seats_available}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassItems;