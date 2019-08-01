import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';



const Navigation = (props) => {


	return (
		<div className="navigation">
			<nav>
				<ul>
					<li><NavLink to="/About">About</NavLink></li>
					<li><NavLink to="/Contact">Contact</NavLink></li>
					<li><NavLink to="/Resume" >Resume</NavLink></li>
					<li><NavLink to="/Method">Method</NavLink></li>
					<li><NavLink to="/Projects">Experience</NavLink></li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation;
