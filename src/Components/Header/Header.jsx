import React from "react";
import "./header.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Navbar from "./Navbar/Navbar";
import logoHeader from "../../Assets/logoHero.svg";

const Header = () => {
    return (
        <div id="header">
            <div className="bg-[#413574] bg-opacity-75  w-full h-full absolute"></div>
            <div className="containr">
                <Navbar />

                <div className="mt-16 text-white flex items-center justify-center containr ">
                    <div
                        id="headerEduLogo"
                        className="border-2 mr-28 border-white px-10 py-14 backdrop-blur-lg"
                    >
                        <img className="w-48 h-48" src={logoHeader} alt="" />
                    </div>
                    <div className="w-1/2 relative header_content">
                        <h1 className="text-3xl mb-12 font-bold">
                            O‘zbekiston Respublikasi maktabgacha va maktab ta'limi
                            vazirligi
                        </h1>
                        <p className="italic ">
                            Ta’lim va tarbiyaning asosi, poydevori bu – maktab. Maktabni
                            maktab qiladigan kuch esa o‘qituvchilardir
                        </p>
                        <p className="mt-5 font-bold">Shavkat Mirziyoyev</p>
                    </div>
                </div>

                <div className="mt-28">
                    <div className="w-1/2 header_swiper right-32 absolute">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 2000 }}
                            modules={[Autoplay]}
                            className="mySwiper text-white text-xl"
                        >
                            <SwiperSlide>
                                <p>10 104 Maktab</p>
                            </SwiperSlide>
                            <SwiperSlide>6mln O'quvchilar</SwiperSlide>
                            <SwiperSlide>506 618 O'qituvchilar</SwiperSlide>
                            <SwiperSlide>219 Barkamol alvlod maktablari</SwiperSlide>
                            <SwiperSlide>3 Mehribonlik uylari</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
