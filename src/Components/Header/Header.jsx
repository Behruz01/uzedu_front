import React from "react";
import bg_hero from "../../Assets/bg_hero.jpg";

const Header = () => {
    return (
        <div className="absolute w-full top-0 ">
            <div className="bg-[#4c4083] bg-opacity-70  w-full h-full absolute"></div>
            <img className="w-full" src={bg_hero} />
            <h1>hero</h1>
        </div>
    );
};

export default Header;
