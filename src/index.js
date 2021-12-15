import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./index.css";
import MainApp from "./MainApp";
import reportWebVitals from "./reportWebVitals";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);

ReactDOM.render(
	<React.StrictMode>
		<MainApp />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
