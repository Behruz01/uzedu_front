import React from "react";
import HamburgerMenu from "./Navs/HamburgerMenu";
import Lang from "./Navs/Lang";
import NavItems from "./Navs/NavItems/NavItems";

const Navbar = () => {
    return (
        <div className="relative z-10 text-white flex items-center justify-between">
            <HamburgerMenu />
            <NavItems />
            <Lang />
        </div>
    );
};

export default Navbar;
