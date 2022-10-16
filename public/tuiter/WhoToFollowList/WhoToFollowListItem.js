const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item list-group-item-action">
            <ul class="p-0 mb-0">
                <li class="list-inline-item col-2 m-0">
                    <img src=${who.avatarIcon}
                         class="rounded-circle"
                         width="48px" height="48px">
                </li>
                <li class="list-inline-item col-7 align-middle m-0">
                    <div class="vstack gap-0">
                        <div>
                            <b>${who.userName}</b>
                            <span class="fa-stack fa-1x" style="width: 1.5em">
                                <i class="fas fa-circle fa-stack-1x"></i>
                                <i class="fas fa-check fa-stack-1x fa-inverse fa-xs"></i>
                            </span>
                        </div>
                        <div>@${who.handle}</div>
                    </div>
                </li>
                <li class="list-inline-item col-2">
                    <button class="btn btn-primary rounded-pill">Follow</button>
                </li>
            </ul>
        </div>
    `)
}
export default WhoToFollowListItem