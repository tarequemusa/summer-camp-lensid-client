import {Helmet} from "react-helmet-async";
import useClass from "../../hooks/useClass";


const ApprovedClasses = () => {
    const [allClass] = useClass();
    const popularItems = allClass.filter(item => item.category === 'Family Photography')
    return (
        <div>
            <Helmet>
                <title>Approved Classes | LensID An Institute of Photography</title>
            </Helmet>

        </div>
    );
};

export default ApprovedClasses;