import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import Home from "./components/Home";
import Redirect from "./components/Redirect";

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/:slug" children={<Redirect />} />
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
