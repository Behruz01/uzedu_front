import React from "react";
import { FaEnvelopeOpenText, FaHeadset } from "react-icons/fa";
import Logo from "../../../Assets/maktabgacha_logo.svg";

const MainNav = () => {
    return (
        <div className="flex justify-between containr mt-16 gap-10 mainNav_section">
            <img className="w-56 mainNav_logo" src={Logo} alt="MainLogo" />
            <div className="flex w-1/2 gap-5 mainNav_text cursor-pointer items-center bg-[#f0f220] transition delay-75 rounded-lg px-10 group hover:bg-[#4c4083] ">
                <FaEnvelopeOpenText className="w-14 h-14 transition delay-75 text-[#4c4083]  group-hover:text-white" />
                <p className="text-[#4c4083] text-xl font-bold transition delay-75 group-hover:text-white ">
                    Maktabgacha va maktab ta’limi vaziriga murojaat va takliflaringizni
                    yuboring!
                </p>
            </div>
            <div className="flex items-center gap-5 mainNav_contact">
                <ul className="flex-col">
                    <li className="font-bold text-lg">Ishonch telefoni</li>
                    <li className="text-sm">(71) 202 09 09 </li>
                    <li className="cursor-pointer transition-all delay-75 mt-1.5 text-center bg-[#4c4083] text-white rounded py-1 hover:bg-[#f0f220] hover:text-[#4c4083]">
                        Baholash
                    </li>
                </ul>
                <FaHeadset className="text-[#4c4083] w-[50px] h-[50px]" />
            </div>
        </div>
    );
};

export default MainNav;
