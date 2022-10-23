import React from "react";
import { Twitter, HouseDoorFill, Hash, BellFill, EnvelopeFill,
    BookmarkFill, List, PersonFill, ThreeDots } from 'react-bootstrap-icons';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
    <>
        <div className="list-group">
            <div className="list-group-item">
                <Twitter/>
            </div>
            <div className="list-group-item">
                <HouseDoorFill/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Home</div>
            </div>
            <div className="list-group-item active">
                <Hash/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Explore
                </div>
            </div>
            <div className="list-group-item">
                <BellFill/>
                <div
                    className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Notifications
                </div>
            </div>
            <div className="list-group-item">
                <EnvelopeFill/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Messages
                </div>
            </div>
            <div className="list-group-item">
                <BookmarkFill/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks
                </div>
            </div>
            <div className="list-group-item">
                <List/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Lists</div>
            </div>
            <div className="list-group-item">
                <PersonFill/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Profile
                </div>
            </div>
            <div className="list-group-item">
                <ThreeDots/>
                <div className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">More</div>
            </div>
        </div>
        <button className="btn btn-primary rounded-pill mt-1 w-100">Tuit</button>
    </>
    );
};
export default NavigationSidebar;