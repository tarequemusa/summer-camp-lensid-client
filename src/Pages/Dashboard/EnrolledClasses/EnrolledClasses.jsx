import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const EnrolledClasses = () => {
    return (
        <div className="w-full">
            <div>
                <Helmet>
                    <title>Enrolled Class | LensID An Institute of Photography since 2020</title>
                </Helmet>
                <div className="w-full">
                    <SectionTitle
                        subHeading="Enrolled Class"
                        heading="All Enrolled Classes"
                    ></SectionTitle>
                </div>
            </div>
            <h2 className="text-center text-2xl font-bold">Payment Section</h2>
        </div>
    );
};

export default EnrolledClasses;