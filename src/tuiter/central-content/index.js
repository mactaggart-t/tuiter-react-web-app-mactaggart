import React from "react";
import HomeComponent from "../home";
import ExploreComponent from "../explore";
import {useSelector} from "react-redux";

const CentralContent = () => {
    const activeTab = useSelector(state => state.tuiter);
    return(
        activeTab.toString() === "home" ? <HomeComponent/> : <ExploreComponent/>
    );
};
export default CentralContent;