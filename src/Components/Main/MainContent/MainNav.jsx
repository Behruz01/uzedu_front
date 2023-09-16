import React from "react";
import { FaEnvelopeOpenText, FaHeadset } from "react-icons/fa";
import Logo from "../../../Assets/maktabgacha_logo.svg";

const MainNav = () => {
    return (
        <div className="flex justify-around containr ">
            <img className="w-[195px]" src={Logo} alt="MainLogo" />
            <div className="flex gap-5 justify-normal items-center bg-[#f0f220] p-4 rounded-lg px-6 group hover:bg-[#4c4083] ">
                <FaEnvelopeOpenText className="w-[30px] h-[30px] text-[#4c4083]  group-hover:text-white" />
                <span className="text-[#4c4083] text-xl w-[460px] font-bold group-hover:text-white ">
                    Maktabgacha va maktab ta’limi vaziriga murojaat va takliflaringizni
                    yuboring!
                </span>
            </div>
            <div className="flex items-center gap-5">
                <ul className="flex-col">
                    <li className="font-bold text-lg">Ishonch telefoni</li>
                    <li className="text-xl">(71) 202 09 09 </li>
                    <li className="mt-1 bg-[#4c4083] text-white px-4 rounded py-1 hover:bg-[#f0f220] hover:text-[#4c4083]">
                        Baholash
                    </li>
                </ul>
                <FaHeadset className="text-[#4c4083] w-[50px] h-[50px]" />
            </div>
        </div>
    );
};

export default MainNav;
