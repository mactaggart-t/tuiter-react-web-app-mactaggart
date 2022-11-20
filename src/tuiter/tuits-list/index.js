import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem from "./tuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading && tuits.map(post =>
                   <TuitItem key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;