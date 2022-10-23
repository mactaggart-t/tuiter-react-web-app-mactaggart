import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import { GearFill } from 'react-bootstrap-icons'

const ExploreComponent = () => {
    return(
        <>
            <ul className="mb-1 wd-searchbar-style">
                <li className="list-inline-item col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-10 align-middle m-0 p-0">
                    <div className="inner-addon left-addon">
                        <input type="text"
                               className="form-control form-rounded"
                               id="input1"
                               placeholder="Search Tuiter" />
                    </div>
                </li>
                <li className="list-inline-item align-middle m-0 p-0">
                    <GearFill style={{color: "#0d6efd", marginLeft: "5px"}}/>
                </li>
            </ul>
            <ul className="nav nav-tabs mb-1">
                <li className="nav-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link active" href="#">For You</a>
                </li>
                <li className="nav-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-xxl-inline d-xl-inline d-lg-line d-md-inline d-sm-none">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="card">
                <div className="card-img-caption">
                    <b className="card-text">SpaceX's Starship</b>
                    <img src="/images/spacexstarship.jpg"
                         className="card-img-top" alt="..."/>
                </div>
                <PostSummaryList/>
            </div>
        </>
    );
};
export default ExploreComponent;