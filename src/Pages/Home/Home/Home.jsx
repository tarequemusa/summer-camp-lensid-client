import Categories from "../Categories/Categories";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import PopularClasses from "../popularClasses/popularClasses";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;