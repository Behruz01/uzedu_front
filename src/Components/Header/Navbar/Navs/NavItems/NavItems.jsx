import React from "react";
import NavItemTop from "./NavItemTop";
import NavItemBottom from "./NavItemBottom";

const NavItems = () => {
    return (
        <div className="w-3/4">
            <NavItemTop />
            <hr id="hrDraw" className="w-full my-4"/>
            <NavItemBottom />
        </div>
    );
};

export default NavItems;
