import { createSlice } from "@reduxjs/toolkit";

const tuiterData = createSlice({
                                 name: "activeTab",
                                 initialState: "home",
                                 reducers: {
                                     setActiveTab(state, newActiveTab) {
                                         return newActiveTab.payload;
                                         },
                                 }

});
export const {setActiveTab} = tuiterData.actions
export default tuiterData.reducer;