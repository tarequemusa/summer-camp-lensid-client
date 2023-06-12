import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";


const MyClass = () => {
    return (
        <div>
            <Helmet>
                <title>My Class | LensID An Institute of Photography</title>
            </Helmet>
            <SectionTitle
                subHeading="My Photography Classes"
                heading="My Class"
            ></SectionTitle>

        </div>
    );
};

export default MyClass;