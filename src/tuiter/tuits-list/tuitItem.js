import React from "react";
import TuitStats from "../tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked":  false,
            "replies": 100,
            "retuits": 1000,
            "likes": 10000,
            "handle": "@spacex",
            "tuit": "this is a sample tuit"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item" key={post._id}>
            <ul className="p-0">
                <li className="list-inline-item align-top">
                    <img src={`/images/${post.image}`} alt="react" className="rounded-circle"
                         width="48px" height="48px" />
                </li>
                <li className="list-inline-item col-10 align-middle">
                    <span className="wd-medium-white-font">
                        <b>{post.userName}</b>
                    </span>
                    <span className="wd-small-gray-font"> {post.handle} - {post.time}
                    </span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <br/>
                    <span className="wd-medium-gray-font">
                        {post.tuit}
                    </span>
                    <br/>
                    <TuitStats post={post}/>
                </li>
            </ul>
        </li>
    );
};
export default PostSummaryItem;