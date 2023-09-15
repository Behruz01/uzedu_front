import React from "react";
import HamburgerMenu from "./Navs/HamburgerMenu";
import Lang from "./Navs/Lang";
import NavItems from "./Navs/NavItems/NavItems";

const Navbar = () => {
    return (
        <div className="relative z-10 flex items-center justify-around mx-40">
            <HamburgerMenu />
            <NavItems />
            <Lang />
        </div>
    );
};

export default Navbar;
