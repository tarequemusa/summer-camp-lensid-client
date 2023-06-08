import {Helmet} from "react-helmet-async";
import useClass from "../../hooks/useClass";
import ClassCategory from "../ClassCategory/ClassCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const ApprovedClasses = () => {
    const [allClass] = useClass();
    const Family_Photography = allClass.filter(item => item.category === 'Family Photography');
    const Mobile_Photography = allClass.filter(item => item.category === 'Mobile Photography');
    const Photo_Editing = allClass.filter(item => item.category === 'Photo Editing');
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
                <div><ClassCategory items={Family_Photography}></ClassCategory></div>
                <div className="my-10">
                    <ClassCategory items={Mobile_Photography}></ClassCategory>
                </div>
                <div>
                    <ClassCategory items={Photo_Editing}></ClassCategory>
                </div>
            </div>
        </div>
    );
};

export default ApprovedClasses;