import React from "react";
import MainNav from "./MainContent/MainNav";
import "./main.css";
import MainAdvertising from "./MainContent/MainAdvertising";
import MainCards from "./MainContent/MainCards/MainCards";

const Main = () => {
    return (
        <div id="main_section">
            <MainNav />
            <MainAdvertising />
            <MainCards />
        </div>
    );
};

export default Main;
