import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Signup from "../pages/signup";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (store.token ? <div className="text-center mt-5">

		<h1>{store.homeMessage}</h1>
		<Navbar />

	</div> : <div className="text-center mt-5">
		<button className="btn btn-secondary mx-3">
			<Link to="/signup" className="text-white">Signup</Link>
		</button>
		<button className="btn btn-secondary mx-3">
			<Link to="/login" className="text-white">Login</Link>
		</button>
	</div>);
};

