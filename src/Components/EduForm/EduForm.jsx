import React from "react";
import "./eduForm.css";

const EduForm = () => {
    return (
        <div>
            <div className="containr justify-center mx-auto mt-10">
                <div className="mx-auto form_div w-4/6">
                    <h1 className="text-3xl text-[#4c4083] font-bold text-center mb-5">
                        Ta'lim sifatini oshirishga qaratilgan murojaat va takliflarni
                        yuboring
                    </h1>
                    <form action="" className="relative" id="form">
                        <div className="flex justify-between gap-3 first_column">
                            <input
                                type="text"
                                placeholder="F.I.SH"
                                className="p-3 w-1/2 border-2 name_input border-[#4c4083d5] rounded"
                            />
                            <select
                                name="city"
                                id="city"
                                className="border-2 city_select border-[#4c4083d5] rounded"
                            >
                                <option value="hudud">Hudud</option>
                                <option value="toshkent">Toshkent shahri</option>
                                <option value="andijon">Andijon viloyati</option>
                                <option value="namangan">Namangan viloyati</option>
                                <option value="fargona">Farg'ona viloyati</option>
                                <option value="navoiy">Navoiy viloyati</option>
                                <option value="jizzax">Jizzax viloyati</option>
                                <option value="sirdaryo">Sirdaryo viloyati</option>
                                <option value="qashqadaryo">Qashqadaryo viloyati</option>
                                <option value="surxandaryo">Surxandaryo viloyati</option>
                                <option value="buxoro">Buxoro viloyati</option>
                                <option value="xorazm">Xorazm viloyati</option>
                                <option value="qoraqalpogiston">
                                    Qoraqalpog'iston Respublikasi
                                </option>
                            </select>
                            <select
                                className="border-2 select_district border-[#4c4083d5] rounded"
                                name="district"
                                id="district"
                            >
                                <option value="tuman">Tuman</option>
                                <option value="bektemir">Bektemir tumani</option>
                                <option value="mirobod">Mirobod Tumani</option>
                                <option value="olmazor">Olmazor tumani</option>
                                <option value="sergeli">Sergeli tumani</option>
                            </select>
                        </div>
                        <div className="my-7 justify-between flex gap-3">
                            <input
                                className="border-2 border-[#4c4083d5] w-1/2 p-3 rounded"
                                type="tel"
                                name="telNumber"
                                id="telNumber"
                                placeholder="Tel:"
                            />
                            <select
                                className="border-2 border-[#4c4083d5] p-3 rounded w-1/2"
                                name="beforeSchool"
                                id="beforeSchool"
                            >
                                <option value="">Yo'nalishni tanlang</option>
                                <option value="maktabgacha">Maktabgacha ta'lim</option>
                                <option value="maktab">Maktab ta'limi</option>
                            </select>
                        </div>
                        <textarea
                            className="p-5 block border-2 border-[#4c4083d5] w-full mb-7"
                            name="textArea"
                            id=""
                            cols="80"
                            rows="7"
                            placeholder="Murojaat va takliflar"
                        ></textarea>
                        <button
                            type="submit"
                            className="hover:bg-[#f0f220] w-full  hover:text-[#4c4083] font-bold transition delay-75 bg-[#4c4083] text-white py-3 rounded "
                        >
                            Yuborish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EduForm;
