import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
