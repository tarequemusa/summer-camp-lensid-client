

const ClassItems = ({item}) => {
    const {course_name, image_link, course_fee, course_intro, duration} = item;
    return (
        <div className="flex space-x-4 mx-auto px-10">
            <img className="w-[100px]" src={image_link} alt="" />
            <div>
                <h3 className="uppercase font-bold">{course_name}</h3>
                <p className="py-2">{course_intro}</p>
                <p className="text-green-700 font-extrabold">Fee: ${course_fee}</p>
                <p className="text-green-700 font-extrabold">Duration: {duration}</p>
            </div>
        </div>
    );
};

export default ClassItems;