import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getCurrentUser, logoutUser } from "./utils/storage";

function App() {
	const user = getCurrentUser();

	return (
		<div className="container py-4">
			
			<Navbar />

			<hr />
			<AppRoutes />

			<Footer />
		</div>
	);
}

export default App;
