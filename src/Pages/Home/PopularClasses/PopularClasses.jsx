import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ClassItems from "../../Shared/ClassItems/ClassItems";
import useClass from "../../../hooks/useClass";


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
                    popularItems.map(item => <ClassItems
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