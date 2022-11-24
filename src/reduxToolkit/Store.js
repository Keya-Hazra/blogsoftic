import { configureStore } from "@reduxjs/toolkit";
import PostR from "./PostReducer";

const store = configureStore({
	reducer: {
		post: PostR,
	},
});

export default store;
