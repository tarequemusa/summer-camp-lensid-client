import {Helmet} from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useInstructor from "../../hooks/useInstructor";
import InstructorItems from "../Shared/InstructorItems/InstructorItems";


const AllInstructor = () => {
    const [instructors] = useInstructor();
    const FamilyPhotography = instructors.filter(item => item.category === 'Family Photography');
    const MobilePhotography = instructors.filter(item => item.category === 'Mobile Photography');
    const PhotoEditing = instructors.filter(item => item.category === 'Photo Editing');
    return (
        <div>
            <Helmet>
                <title>All Instructors | LensID An Institute of Photography</title>
            </Helmet>
            <SectionTitle
                subHeading="LEARN HOW TO CULTIVATE BEAUTIFUL MEMORIES FOR YOUR CLIENT FAMILIES"
                heading="Instructors"
            ></SectionTitle>
            <div className="px-10 my-12">
                <div><InstructorItems items={FamilyPhotography}></InstructorItems></div>
                <div className="py-8">
                    <InstructorItems items={MobilePhotography}></InstructorItems>
                </div>
                <div>
                    <InstructorItems items={PhotoEditing}></InstructorItems>
                </div>
            </div>
        </div>
    );
};

export default AllInstructor;