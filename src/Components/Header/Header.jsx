import Navbar from "./Navbar/Navbar";
import logoHeader from "../../Assets/logoHero.svg";
import mainHeaderBottomShape from "../../Assets/mainHeaderBottomShape.svg";
import "./header.css";
import HeaderSwiper from "./HeaderSwiper/HeaderSwiper";

const Header = () => {
    return (
        <div id="header">
            <div className="bg_rounded opacity-70 z-20 absolute w-[700px] h-[350px] bg-[#e3da5c] bottom-0 left-[-350px] rounded-t-full"></div>
            <div className="bg-[#413574] bg-opacity-75 w-full h-full absolute"></div>
            <div className="containr">
                <Navbar />

                <div className="mt-16 text-white flex items-center justify-center containr ">
                    <div
                        id="headerEduLogo"
                        className="border-2 mr-20 border-white px-14 py-14 backdrop-blur-lg"
                    >
                        <img className="w-48 h-48" src={logoHeader} alt="" />
                    </div>
                    <div className="w-1/2 relative header_content">
                        <h1 className="text-3xl mb-12 font-bold">
                            O‘zbekiston Respublikasi maktabgacha va maktab ta'limi
                            vazirligi
                        </h1>
                        <p className="italic edu_text">
                            Ta’lim va tarbiyaning asosi, poydevori bu – maktab. Maktabni
                            maktab qiladigan kuch esa o‘qituvchilardir
                        </p>
                        <p className="mt-5 font-bold">Shavkat Mirziyoyev</p>
                    </div>
                </div>
            </div>
            <HeaderSwiper />
            <img
                src={mainHeaderBottomShape}
                alt=""
                className="absolute z-20 bottom-0 left-96 main_header_bottom_shape"
            />
        </div>
    );
};

export default Header;
