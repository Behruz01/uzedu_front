// import React from "react";
import Navbar from "./Navbar/Navbar";
import logoHeader from "../../Assets/logoHero.svg";
import "./header.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
    return (
        <div id="header" className="">
            <div
                className="bg_rounded opacity-70 z-20 absolute w-[700px] h-[350px] bg-[#e3da5c] bottom-0 left-[-350px] rounded-t-full"
            ></div>
            <div className="bg-[#413574] bg-opacity-75  w-full h-full absolute"></div>
            <div className="containr ">
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
                        <p className="italic edu_text">
                            Ta’lim va tarbiyaning asosi, poydevori bu – maktab. Maktabni
                            maktab qiladigan kuch esa o‘qituvchilardir
                        </p>
                        <p className="mt-5 font-bold">Shavkat Mirziyoyev</p>
                    </div>
                </div>

                <div className="mt-28 w-full relative">
                    <div className="w-1/2 header_swiper absolute right-0 swiper-container">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 2000 }}
                            modules={[Autoplay]}
                            className="mySwiper text-white text-center text-2xl"
                        >
                            <SwiperSlide>
                                <p className="font-bold ml-5">10 104</p>
                                <p className="text-xl ml-5">Maktab</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="font-bold ml-5">6mln</p>
                                <p className="text-xl ml-5">O'quvchilar</p>
                                <hr className="bg-white h-60 w-0.5 top-0 absolute" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="font-bold ml-5">506 618</p>
                                <p className="text-xl ml-5">O'qituvchilar</p>
                                <hr className="bg-white h-60 w-0.5 top-0 absolute " />
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="font-bold ml-5">219</p>
                                <p className="text-xl ml-5">Barkamol alvlod maktablari</p>
                                <hr className="bg-white h-60 w-0.5 top-0 absolute " />
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="font-bold ml-5">3</p>
                                <p className="text-xl ml-5">Mehribonlik uylari</p>
                                <hr className="bg-white h-60 w-0.5 top-0 absolute " />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
