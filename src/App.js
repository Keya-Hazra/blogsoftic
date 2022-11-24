import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="space-y-8 App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Blog />}></Route>
					<Route path="/single-blog/:id" element={<SingleBlog />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
