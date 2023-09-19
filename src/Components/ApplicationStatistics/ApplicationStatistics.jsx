import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ApplicationStatistics = () => {
    return (
        <div className="mt-16 mb-10 containr">
            <h1 className="text-3xl text-[#4c4083] font-bold text-center mb-5">
                Murojaatlar statistikasi
            </h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2000 }}
                modules={[Autoplay]}
                className="mySwiper text-[#4c4083] containr mt-10 text-center text-2xl absolute"
            >
                <SwiperSlide>
                    <p className="font-bold ml-5">10 104</p>
                    <p className="text-xl ml-5">Maktab</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="font-bold ml-5">6mln</p>
                    <p className="text-xl ml-5">O'quvchilar</p>
                    <hr className="bg-[#4c4083] h-60 w-0.5 top-0 absolute" />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="font-bold ml-5">506 618</p>
                    <p className="text-xl ml-5">O'qituvchilar</p>
                    <hr className="bg-[#4c4083] h-60 w-0.5 top-0 absolute " />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="font-bold ml-5">219</p>
                    <p className="text-xl ml-5">Barkamol alvlod maktablari</p>
                    <hr className="bg-[#4c4083] h-60 w-0.5 top-0 absolute " />
                </SwiperSlide>
                <SwiperSlide>
                    <p className="font-bold ml-5">3</p>
                    <p className="text-xl ml-5">Mehribonlik uylari</p>
                    <hr className="bg-[#4c4083] h-60 w-0.5 top-0 absolute " />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ApplicationStatistics;
