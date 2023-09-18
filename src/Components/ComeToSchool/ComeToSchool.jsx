import React from "react";
import "./ComeToSchool.css";
import notebookImg from "../../Assets/notebook.png";

const ComeToSchool = () => {
    return (
        <div id="come_to_school" className="mt-10">
            <div className="flex containr justify-between">
                <div>
                    <h1 className="w-1/2 leading-10 text-3xl font-bold come_to_school_text text-[#413574]">
                        Agar siz maktabga bora olmasangiz, maktab sizning uyingizga
                        kelishi mumkin.
                    </h1>
                    <p className="w-3/4 text-[#413574] mt-10 mb-6 leading-7 come_to_school_text">
                        Maktab.uz - bu xalqaro standartlarga 1 beradigan va maktab
                        o'quvchilari uchun yuqori sifatli uzluksiz masofaviy ta'limni
                        ta'minlaydigan ilg'or raqamli ta'lim texnologiyasi. Platforma
                        o'qituvchilarga ham, ota -onalarga ham o'quvchilarning rivojlanish
                        darajasini kuzatish va mavzular mazmuni bilan tanishish uchun keng
                        imkoniyatlar beradi.
                    </p>
                    <button className="come_to_school_btn bg-[#f0f220] px-12 py-2 hover:bg-[#4c4083] hover:text-[#f0f220] transition delay-75 text-[#4c4083] font-bold rounded">
                        Batafsil
                    </button>
                </div>
                <img className="w-80 notebook_img" src={notebookImg} alt="" />
            </div>
        </div>
    );
};

export default ComeToSchool;
