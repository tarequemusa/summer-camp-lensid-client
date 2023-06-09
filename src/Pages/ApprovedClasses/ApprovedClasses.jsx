import {Helmet} from "react-helmet-async";
import useClass from "../../hooks/useClass";
import ClassCategory from "../ClassCategory/ClassCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import {Link} from "react-router-dom";


const ApprovedClasses = () => {
    const [allClass] = useClass();
    // const Family_Photography = allClass.filter(item => item.category === 'Family Photography');
    // const Mobile_Photography = allClass.filter(item => item.category === 'Mobile Photography');
    // const Photo_Editing = allClass.filter(item => item.category === 'Photo Editing');
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
                                <img className="w-[100%] md:w-[50%] lg:w-[50%] outline outline-gray-300" src={singleClass.image_link} alt="" />
                                <div className="border-t-2 border-r-2 border-b-2 border-gray-300 p-4">
                                    <h3 className="uppercase font-bold">{singleClass.course_name}</h3>
                                    <p className="py-2">{singleClass.course_intro}</p>
                                    <div className="flex items-center justify-between gap-5">
                                        <div>
                                            <p className="text-green-700 font-semibold">Fee: ${singleClass.course_fee}</p>
                                            <p className="text-green-700 font-semibold py-1">Duration: {singleClass.duration}</p>
                                            <p className="text-green-700 font-semibold">No. of Seats: {singleClass.seats_available}</p>
                                        </div>
                                        <Link to="/"><button className="btn btn-info btn-sm">Select Course</button></Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                {/* <div><ClassCategory items={Family_Photography}></ClassCategory></div>
                <div className="my-10">
                    <ClassCategory items={Mobile_Photography}></ClassCategory>
                </div>
                <div>
                    <ClassCategory items={Photo_Editing}></ClassCategory>
                </div> */}
            </div>
        </div>
    );
};

export default ApprovedClasses;