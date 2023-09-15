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
						<Link to="/">
							<button className="btn btn-primary">Return Home</button>
						</Link>
						:
						<Link to="/">
							<button onClick={() => actions.logout()} className="btn btn-primary">Logout</button>
						</Link>
					}
				</div>
			</div>
		</nav>
	);
};

