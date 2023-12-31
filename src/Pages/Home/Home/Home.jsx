import {Helmet} from "react-helmet-async";
import Categories from "../Categories/Categories";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import PopularClasses from "../popularClasses/popularClasses";
import SignUp from "../SignUp/SignUp";
import ScrollToTop from "react-scroll-to-top";
import "../Home/ScrollTop.css"


const Home = () => {
    return (
        <>
            <div>
                <div>
                    <Helmet>
                        <title>LensID | An Institute of Photography since 2020</title>
                    </Helmet>
                </div>
                <Slider></Slider>
                <Categories></Categories>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
                <SignUp></SignUp>
                <div className="scroll">
                    <ScrollToTop smooth />
                </div>
            </div>

        </>

    );
};

export default Home;