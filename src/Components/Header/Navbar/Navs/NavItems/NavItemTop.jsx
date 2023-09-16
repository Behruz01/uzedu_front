import React from "react";

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
        <div className="gap-10">
            <div className="flex text-xs gap-5">
                {/* {data.map((items, i) => (
                    <p key={i}>{items.navItems}</p>
                ))} */}

                <p>O'qituvchi ish o'rinlari</p>
                <p>Hujjatlar</p>
                <p>Loyihalar</p>
                <p>Ko'p beriladigan savollar</p>
                <p>Davlat ramzlari</p>
                <p>Fuqarolar murojaati</p>
            </div>
        </div>
    );
};

export default NavItemTop;
