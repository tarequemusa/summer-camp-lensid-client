import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./PopularInstructors.css"
import {useEffect, useRef, useState} from "react";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${ Math.ceil(time / 1000) }s`;
    };
    return (
        <section className="mt-24">
            <SectionTitle
                subHeading="Our Popular Instructors"
                heading="Learn With Experts"
            ></SectionTitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper my-14"
            >
                {
                    instructors.slice(0, 6).map(instructor => <SwiperSlide
                        key={instructor._id}
                    >
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div>
                                <p className="w-60 text-center"><img className="rounded-full shadow-lg outline" src={instructor.profile_image} alt="" /></p>
                            </div>
                            <div>
                                <p>{instructor.instructor_name}</p>
                                <p> Number of Classes: {instructor.number_classes}</p>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
};

export default PopularInstructors;