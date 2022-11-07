import { createSlice } from "@reduxjs/toolkit";
import postArray from "../data/posts.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitSlice = createSlice({
                                  name: "tuits",
                                  initialState: postArray,
                                  reducers: {
                                      createTuit(state, action) {
                                          state.unshift({
                                                            ...action.payload,
                                                            ...templateTuit,
                                                            _id: (new Date()).getTime(),
                                                        })
                                      },
                                      deleteTuit(state, action) {
                                          const index = state
                                              .findIndex(tuit =>
                                                             tuit._id === action.payload);
                                          state.splice(index, 1);
                                      },
                                  }
                              });
export const {createTuit, deleteTuit} = tuitSlice.actions;
export default tuitSlice.reducer;