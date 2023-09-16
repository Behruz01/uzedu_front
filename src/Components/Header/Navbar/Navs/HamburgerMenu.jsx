import React from "react";
import { IoIosMenu } from "react-icons/io";
const HamburgerMenu = () => {
    return (
        <div className="border-2 border-white px-2 py-2 cursor-pointer group hover:bg-[#f0f220] transition-all delay-75">
            <IoIosMenu className="w-8 h-8 group-hover:text-[#4c4083]" />
        </div>
    );
};

export default HamburgerMenu;
