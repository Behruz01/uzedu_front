import React from "react";
import newsCardImg1 from "../../Assets/newsCardImg1.jpg";
import { FaArrowRight } from "react-icons/fa";

const NewsCards = () => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;

    return (
        <div className="mt-10 flex items-center containr justify-around flex-row flex-wrap">
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
            <div className="mb-10 relative group hover:drop-shadow-2xl shadow-2xl w-96 h-[500px] ease-in-out duration-300 cursor-pointer bg-white  text-center">
                <img className="mx-auto p-0" src={newsCardImg1} alt="" />
                <p className="mt-5">
                    O‘ZBEKISTONLIK MAKTAB DIREKTORLARI ANGLIYADAGI MAKTABLARDA DIREKTOR
                    BO‘LISHADI
                </p>
                <div className="flex items-center justify-between mx-auto left-0 right-0 mb-4 px-5 absolute bottom-0">
                    <p className="text-slate-600">{currentDate}</p>
                    <FaArrowRight className="w-7 h-7 group-hover:text-[#4c4083] transition delay-75 text-[#f0f220]" />
                </div>
            </div>
        </div>
    );
};

export default NewsCards;
