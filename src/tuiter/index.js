import NavigationSidebar from "./navigation-item";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import tuiterReducer from "./reducers/tuiter-reducer"
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import CentralContent from "./central-content";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, tuiter: tuiterReducer}});
function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <CentralContent/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}
export default Tuiter