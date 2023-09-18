import React from "react";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import ComeToSchool from "../Components/ComeToSchool/ComeToSchool";
import NewsCards from "../Components/NewsCards/NewsCards";
import InteractiveMap from "../Components/InteractiveMap/InteractiveMap";
// import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <ComeToSchool />
            <NewsCards />
            <InteractiveMap />
            {/* <Footer /> */}
        </>
    );
};

export default Home;
