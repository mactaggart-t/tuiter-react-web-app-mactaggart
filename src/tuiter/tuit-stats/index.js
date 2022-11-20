import React from "react";
import {Chat, Heart, HeartFill, Repeat, Share,
    HandThumbsDown, HandThumbsDownFill} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks"

const PostSummaryList = ({
                             post = {
                                 "topic": "Space",
                                 "userName": "SpaceX",
                                 "time": "2h",
                                 "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                                 "image": "tesla.png",
                                 "liked": false,
                                 "disliked": false,
                                 "dislikes": 0,
                                 "replies": 100,
                                 "retuits": 1000,
                                 "likes": 10000,
                                 "handle": "@spacex",
                                 "tuit": "this is a sample tuit"
                             }
                         }) => {
    const dispatch = useDispatch();
    return (
        <div style={{
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%"
        }}>
            <span>
                <Chat/> {post.replies}
            </span>
            <span>
                <Repeat/> {post.retuits}
            </span>
            <div>
                <span>
                    {post.liked ? <HeartFill
                        onClick={() => dispatch(updateTuitThunk(
                            {
                                ...post,
                                likes: post.likes - 1,
                                liked: false
                            }))} color="red"/> : <Heart
                        onClick={() => dispatch(updateTuitThunk(
                            {
                                ...post,
                                likes: post.likes + 1,
                                liked: true
                            }))}
                    />} {post.likes}
                </span>
            </div>
            <div>
                <span>
                    {post.disliked ? <HandThumbsDownFill
                        onClick={() => dispatch(updateTuitThunk(
                            {
                                ...post,
                                dislikes: post.dislikes - 1,
                                disliked: false
                            }))} color="red"/> : <HandThumbsDown
                         onClick={() => dispatch(updateTuitThunk(
                             {
                                 ...post,
                                 dislikes: post.dislikes + 1,
                                 disliked: true
                             }))}
                     />} {post.dislikes}
                </span>
            </div>
            <span>
                <Share/>
            </span>
        </div>
    );
};
export default PostSummaryList;