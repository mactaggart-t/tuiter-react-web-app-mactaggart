import React from "react";
import {Chat, Heart, HeartFill, Repeat, Share} from "react-bootstrap-icons";

const PostSummaryList = ({
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
                         }) => {
    return(
        <div style={{
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%"}}>
                        <span>
                            <Chat/> {post.replies}
                        </span>
            <span>
                            <Repeat/> {post.retuits}
                        </span>
            <span>
                            {post.liked ? <HeartFill color="red"/> : <Heart/>} {post.likes}
                        </span>
            <span>
                            <Share/>
                        </span>
        </div>
    );
};
export default PostSummaryList;