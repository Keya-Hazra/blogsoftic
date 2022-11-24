import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	post: [],
};

const PostReducer = createSlice({
	name: "post",
	initialState,
	reducers: {
		postList: (state, action) => {
			state.post = [...action.payload];
		},
	},
});

export const { postList } = PostReducer.actions;

export default PostReducer.reducer;
