import React from "react";
import MainNav from "./MainContent/MainNav";
import "./main.css";
import MainAdvertising from "./MainContent/MainAdvertising";

const Main = () => {
    return (
        <div className="containr">
            <MainNav />
            <MainAdvertising />
        </div>
    );
};

export default Main;
