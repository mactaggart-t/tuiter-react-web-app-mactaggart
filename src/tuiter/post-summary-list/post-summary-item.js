import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item" key={post._id}>
            <ul className="p-0">
                <li className="list-inline-item col-10 align-middle">
                    <span className="wd-small-gray-font">{post.userName} - {post.time}
                    </span>
                    <br/>
                    <span className="wd-medium-white-font">
                        <b>{post.topic}</b>
                    </span>
                    <br/>
                    <span className="wd-medium-gray-font">
                        {post.title}
                    </span>
                    <br/>
                </li>
                <li className="list-inline-item align-middle">
                    <img src={`/images/${post.image}`} alt="react" className="rounded"
                         width="72px" height="72px" />
                </li>
            </ul>
        </li>
    );
};
export default PostSummaryItem;