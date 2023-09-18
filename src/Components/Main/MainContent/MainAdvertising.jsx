import React from "react";
import miniBannerHeader from "../../../Assets/miniBannerMain.png";

const MainAdvertising = () => {
    return (
        <div className="bg-[#4c4083e8] containr gap-10 main_advertising flex mt-16 pe-5 rounded-lg justify-between items-center">
            <img className="w-96 miniBannerHeader" src={miniBannerHeader} alt="" />
            <h3 className="text-white text-xl">
                Umumta’lim maktablarining 1-sinfiga bolalarni onlayn qabul qilish jarayoni
                2023 yil 20 iyun kuni soat 12-00 dan boshlanadi
            </h3>
            <button className="main_advertising_button bg-[#f0f220] px-7 py-1 hover:bg-[#4c4083] hover:text-[#f0f220] transition delay-75 text-[#4c4083] font-bold rounded-lg">
                Ro'yxatdan o'tish
            </button>
        </div>
    );
};

export default MainAdvertising;
