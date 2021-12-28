import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Callback from "./pages/Callback";
import Equipment from "./pages/Equipment";
import Nav from "./components/Nav";


const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/callback' element={<Callback />} />
				<Route path='/equipment' element={<Equipment />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
