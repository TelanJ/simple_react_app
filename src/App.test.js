/* eslint no-unused-vars: 0 */ 
/* eslint no-undef: 0 */ 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
