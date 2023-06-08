import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ClassItems from "../../Shared/ClassItems/ClassItems";
import useClass from "../../../hooks/useClass";
import {Link} from "react-router-dom";


const PopularClasses = () => {
    const [allClass] = useClass();
    const popularItems = allClass.filter(item => item.category === 'Family Photography')

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading="LEVEL UP YOUR
                PHOTOGRAPHY SKILLS"
                heading="Popular Classes"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularItems.slice(0, 6).map(item => <ClassItems
                        key={item._id}
                        item={item}
                    ></ClassItems>)
                }
            </div>
            <div className='flex justify-center items-center my-12'>
                <Link to="/approvedclasses"><button className="btn btn-outline border-0 border-b-4">View Full Classes</button></Link>
            </div>
        </section>
    );
};

export default PopularClasses;