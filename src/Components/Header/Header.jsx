import React from "react";
import "./header.css";

// import bg_hero from "../../Assets/bg_hero.jpg";
import Navbar from "./Navbar/Navbar";
import logoHeader from "../../Assets/logoHero.svg";

const Header = () => {
    return (
        <div id="header">
            <div className="bg-[#413574] bg-opacity-75  w-full h-full absolute"></div>
            <div className="containr">
                <Navbar />

                <div className="mt-16 text-white absolute flex items-center justify-center containr">
                    <div
                        id="headerEduLogo"
                        className="border-2 mr-28 border-white px-10 py-14 backdrop-blur-lg"
                    >
                        <img className="w-48 h-48" src={logoHeader} alt="" />
                    </div>
                    <div className="w-1/2 header_content">
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
            </div>
        </div>
    );
};

export default Header;
