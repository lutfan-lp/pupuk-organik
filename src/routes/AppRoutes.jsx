import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Payment from "../pages/Payment";
import Orders from "../pages/Orders";
import Reviews from "../pages/Reviews";
import Promotions from "../pages/Promotions";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/payment" element={<Payment />} />
			<Route path="/orders" element={<Orders />} />
			<Route path="/reviews" element={<Reviews />} />
			<Route path="/promotions" element={<Promotions />} />
		</Routes>
	);
}

export default AppRoutes;