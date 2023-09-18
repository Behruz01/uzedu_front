import React from "react";
import MainNav from "./MainContent/MainNav";
import "./main.css";
import MainAdvertising from "./MainContent/MainAdvertising";
import MainCards from "./MainContent/MainCards/MainCards";

const Main = () => {
    return (
        <div className="containr">
            <MainNav />
            <MainAdvertising />
            <MainCards />
        </div>
    );
};

export default Main;
