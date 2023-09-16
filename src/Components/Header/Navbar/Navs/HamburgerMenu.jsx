import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const HamburgerMenu = () => {
    return (
        <div className="border-2 border-white px-2 py-2 cursor-pointer">
            <GiHamburgerMenu className="w-8 h-8" />
        </div>
    );
};

export default HamburgerMenu;
