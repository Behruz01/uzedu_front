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

                <p>Vazirlik</p>
                <p>Ta'lim</p>
                <p>Faoliyat</p>
                <p>Axborot xizmati</p>
                <p>Ochiq ma'lumotlar</p>
                <p>Korrupsiyaga qarshi kurash</p>
            </div>
        </>
    );
};

export default NavItemBottom;
