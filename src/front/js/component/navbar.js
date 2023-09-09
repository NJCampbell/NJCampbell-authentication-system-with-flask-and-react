import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!store.token ?
						<Link to="/demo">
							<button className="btn btn-primary">Check the Context in action</button>
						</Link>
						:
						<button onClick={() => actions.logout()} className="btn btn-primary">Logout</button>
					}
				</div>
			</div>
		</nav>
	);
};

