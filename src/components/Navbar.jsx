import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
	return (
		<>
			<div className="flex items-center justify-between px-10 py-4 bg-gray-200">
				<div className="flex items-center justify-start flex-1">
					<div className="flex space-x-2">
						<p className="pt-2">EN</p>
						<div className="relative flex">
							<input type="text" className="py-2 border rounded-md 1px solid" />
							{/* <SearchIcon className="absolute right-4 top-2.5" /> */}
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center flex-1 text-lg font-bold text-pink-500">
					E-<span className="text-lg font-bold text-green-500">Commerce</span>
				</div>
				<div className="flex items-center justify-end flex-1">
					<div className="flex space-x-4">
						<p>RESISTER</p>
						<p>SIGN IN</p>
						{/* <AddShoppingCart /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
