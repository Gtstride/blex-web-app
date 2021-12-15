import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./Routes";

import Footer from "./components/Footer/Footer";
import "./App.css";
import RouteChangeTracker from "./components/route-change-tracker/RouteChangeTracker";


const MainApp = () => {
	return (
		<div className="App">
			<Router history={history}>
				<RouteChangeTracker />
				<Routes />
			</Router>
			<Footer />
		</div>
	);
};

export default MainApp;
