import React from "react";
import { Link } from "react-router-dom";
import '../../styles/nav.css'
import People from "./People";

export const Navbar = () => {
	return (
		<div>
		<nav>
			<img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"/>
			<div className="btn-fav"></div>
		</nav>
		<People />
		</div>
	);
};
