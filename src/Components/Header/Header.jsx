import React from "react";
// import bg_hero from "../../Assets/bg_hero.jpg";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div id="header">
            <div className="bg-[#4c4083] bg-opacity-70  w-full h-full absolute"></div>
            <div className="containr">
                <Navbar />
                <div className="text-white absolute">
                    <h1>header</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
