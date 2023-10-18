// likesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
    name: "likes",
    initialState: {},
    reducers: {
        likeComment(state, action) {
            const { postId, commentId } = action.payload;
            state[`${postId}_${commentId}`] = true;
        },
        unlikeComment(state, action) {
            const { postId, commentId } = action.payload;
            state[`${postId}_${commentId}`] = false;
        },
    },
});

export const { likeComment, unlikeComment } = likesSlice.actions;
export default likesSlice.reducer;
