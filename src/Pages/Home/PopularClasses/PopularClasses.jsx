import {useEffect, useState} from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ClassItems from "../../Shared/ClassItems/ClassItems";


const PopularClasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'Family Photography')
                setCourses(popularItems)
            })
    }, [])

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading="LEVEL UP YOUR
                PHOTOGRAPHY SKILLS"
                heading="Popular Classes"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    courses.map(item => <ClassItems
                        key={item._id}
                        item={item}
                    ></ClassItems>)
                }
            </div>
            <div className='flex justify-center items-center my-12'>
                <button className="btn btn-outline border-0 border-b-4">View Full Classes</button>
            </div>
        </section>
    );
};

export default PopularClasses;