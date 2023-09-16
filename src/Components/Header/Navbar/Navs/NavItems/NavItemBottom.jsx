import React from "react";

const data = [
    {
        navItemBottom: [
            "Vazirlik",
            "Ta'lim",
            "Faoliyat",
            "Axborot xizmati",
            "Ochiq ma'lumotlar",
            "Korrupsiyaga qarshi kurash",
        ],
    },
];

const NavItemBottom = () => {
    return (
        <>
            <div className="items-center flex gap-5 justify-between">
                {/* {data.map((items) => (
                    <p className="cursor-pointer ">{items.navItemBottom}</p>
                ))} */}

                <p className="cursor-pointer hover:text-[#f0f220]">Vazirlik</p>
                <p className="cursor-pointer hover:text-[#f0f220]">Ta'lim</p>
                <p className="cursor-pointer hover:text-[#f0f220]">Faoliyat</p>
                <p className="cursor-pointer hover:text-[#f0f220]">Axborot xizmati</p>
                <p className="cursor-pointer hover:text-[#f0f220]">Ochiq ma'lumotlar</p>
                <p className="cursor-pointer hover:text-[#f0f220]">
                    Korrupsiyaga qarshi kurash
                </p>
            </div>
        </>
    );
};

export default NavItemBottom;
