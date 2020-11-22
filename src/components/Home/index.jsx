import React from "react";
import "../../styles.css";
import NavBar from "../NavBar";
import UrlInput from "../UrlInput";

export default function Home() {
	return (
		<div className="Home">
			<NavBar />
			<h1>Try it out! Enter a URL and a Custom Name</h1>
			<UrlInput />
		</div>
	);
}
