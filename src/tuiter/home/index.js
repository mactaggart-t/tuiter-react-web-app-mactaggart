import React from "react";
import TuitList from "../tuits-list";
import WhatsHappening from "./whats-happening";

const ExploreComponent = () => {
    return(
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default ExploreComponent;