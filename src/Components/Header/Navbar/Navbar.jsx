import React from "react";
import HamburgerMenu from "./Navs/HamburgerMenu";
import Lang from "./Navs/Lang";
import NavItems from "./Navs/NavItems/NavItems";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="relative z-10 text-white flex items-center justify-between py-5">
            <HamburgerMenu />
            <NavItems />
            <Lang />
        </div>
    );
};

export default Navbar;
