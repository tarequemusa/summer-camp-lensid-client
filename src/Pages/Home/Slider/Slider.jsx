import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css"

// import required modules
import {EffectCoverflow, Pagination} from "swiper";

const Slider = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-10 gap-10">
                <div className="flex items-center">
                    <div>
                        <div className="mt-5">
                            <h2 className="text-4xl text-center my-auto font-serif font-bold mx-auto">
                                BEST DIGITAL PHOTOGRAPHY COURSES FOR YOU
                            </h2>
                        </div>
                        <div className="flex justify-center mt-10 gap-5 mx-auto">
                            <button className="btn btn-outline btn-primary">Beginner Level</button>
                            <button className="btn btn-outline btn-secondary">100% Online</button>
                        </div>
                    </div>

                </div>
                <div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-3/12" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Slider;