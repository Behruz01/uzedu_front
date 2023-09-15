import React from "react";
import HamburgerMenu from "./Navs/HamburgerMenu";
import Lang from "./Navs/Lang";
import NavItems from "./Navs/NavItems/NavItems";

const Navbar = () => {
    return (
        <div className="flex items-center justify-around">
            <HamburgerMenu />
            <NavItems />
            <Lang />
        </div>
    );
};

export default Navbar;
