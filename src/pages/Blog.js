import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postList } from "../reduxToolkit/PostReducer";
import { useSelector } from "react-redux";

const Blog = () => {
	const [post, setPost] = useState([]);
	const [user, setUser] = useState([]);
	const [comment, setComment] = useState([]);
	const [photo, setPhoto] = useState([]);
	const [finalPost, setFinalPost] = useState([]);

	const dispatch = useDispatch();


	useEffect(() => {
		(async () => {
			const postData = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);

			setPost(postData.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const userData = await axios.get(
				`https://jsonplaceholder.typicode.com/users`
			);
			setUser(userData.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const commentData = await axios.get(
				`https://jsonplaceholder.typicode.com/comments`
			);
			setComment(commentData.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const photoData = await axios.get(
				"https://jsonplaceholder.typicode.com/photos"
			);
			setPhoto(photoData.data);
		})();
	}, []);

	for (let i = 0; i < post.length; i++) {
		const comments = [];

		for (let j = 0; j < user.length; j++) {
			if (post[i].id === user[j].id) {
				// post[i].userInfo = user[j];
				// Object.assign(post[i], {'userInfo': user[j]});
				post[i] = { ...post[i], userInfo: user[j] };
			}
		}

		for (let k = 0; k < comment.length; k++) {
			if (post[i].id === comment[k].postId) {
				// post[i] = { ...post[i], comments: comment[k] };
				// post[i].comments.push = comment[k];
				comments.push(comment[k]);
			}
		}
		post[i].comments = comments;

		for (let l = 0; l < photo.length; l++) {
			if (post[i].id === photo[l].id) {
				// post[i] = { ...post[i], photos: photo[l] };
				post[i].photos = photo[l];
			}
		}
	}
	const pList = useSelector((state) => state.post.post);
	useEffect(() => {
		setFinalPost(post.slice(0, 20));

		dispatch(postList(finalPost));
	}, [post]);

	console.log(finalPost);
	// console.log("redux", pList);

	return (
		<div>
			<div className="px-20">
				{pList.map((data) => {
					const { userInfo = {} } = data;
					const { name = " " } = userInfo;
					const { comments = [] } = data;
					const { photos = {} } = data;
					return (
						<div
							key={data.id}
							className="p-4 py-6 mb-4 border border-1 rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-100"
						>
							<div className="flex justify-between space-x-10">
								<div className="w-20">
									<img
										src={photos.url}
										alt=""
										className="w-20 h-20 rounded-full shrink-0"
									/>
									<p className="my-1 text-xs text-black whitespace-nowrap">
										{name}
									</p>
								</div>
								<div className="w-full mr-4">
									<h1 className="h-8 mr-2 overflow-hidden text-xl font-semibold uppercase hover:underline">
										<Link to={`/single-blog/${data.id}`}>{data.title}</Link>
									</h1>

									<p className="text-sm text-black">{data.body}</p>
									<p className="flex justify-end my-1 text-xs text-black whitespace-nowrap">
										Number of Comments: {comments.length}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
