import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item"><b>Who To Follow</b></div>
            ${who.map(whoItem => {
                return(WhoToFollowListItem(whoItem));
            }).join('')}
        </div>
    `)
}

export default WhoToFollowList;