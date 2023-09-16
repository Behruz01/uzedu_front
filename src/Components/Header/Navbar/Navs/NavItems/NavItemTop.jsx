import React from "react";

import { AiOutlineEye } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const data = [
    {
        navItems: [
            "O'qituvchi ish o'rinlari",
            "Hujjatlar",
            "Loyihalar",
            "Ko'p beriladigan savollar",
            "Davlat ramzlari",
            "Fuqarolar murojaati",
        ],
    },
];

const NavItemTop = () => {
    return (
        <>
            <div className="flex text-xs items-center justify-between w-full">
                {/* {data.map((items, i) => (
                    <p key={i}>{items.navItems}</p>
                ))} */}

                <p className="cursor-pointer hover:text-[#f0f220]">
                    O'qituvchi ish o'rinlari
                </p>
                <p className="cursor-pointer hover:text-[#f0f220]">Hujjatlar</p>
                <p className="cursor-pointer hover:text-[#f0f220]">Loyihalar</p>
                <p className="cursor-pointer hover:text-[#f0f220]">
                    Ko'p beriladigan savollar
                </p>
                <p className="cursor-pointer hover:text-[#f0f220]">Davlat ramzlari</p>
                <p className="cursor-pointer hover:text-[#f0f220]">Fuqarolar murojaati</p>

                <div className="flex items-center">
                    <AiOutlineEye className="w-6 h-6 cursor-pointer" />
                    <hr className="bg-white h-1/5 w-5 transform rotate-90" />
                    <CiSearch className="w-6 h-6 cursor-pointer" />
                </div>
            </div>
        </>
    );
};

export default NavItemTop;
