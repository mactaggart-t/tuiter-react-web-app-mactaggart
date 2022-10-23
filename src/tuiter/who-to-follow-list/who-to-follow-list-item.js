import React from "react";
import {PatchCheckFill} from 'react-bootstrap-icons'

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li key={who.userName} className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" alt={'avatarImg'}
                         height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">
                        {who.userName}
                        <PatchCheckFill/>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;