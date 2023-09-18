import React from "react";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import ComeToSchool from "../Components/ComeToSchool/ComeToSchool";
import NewsCards from "../Components/NewsCards/NewsCards";
// import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <ComeToSchool />
            <NewsCards />
            {/* <Footer /> */}
        </>
    );
};

export default Home;
