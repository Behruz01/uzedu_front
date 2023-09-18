import React from "react";
import mapUzb from "../../Assets/mapUzb.png";
import "./InteractiveMap.css";
const InteractiveMap = () => {
    return (
        <div className="mt-12 interactive_map">
            <div className="containr">
                <h1 className="text-3xl mb-10 font-bold text-center text-[#4c4083]">
                    Interaktiv xarita
                </h1>
                <img className="mx-auto" src={mapUzb} alt="" />
            </div>
        </div>
    );
};

export default InteractiveMap;
