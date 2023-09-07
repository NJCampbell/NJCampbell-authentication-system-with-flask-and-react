import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Signup from "../pages/signup";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Signup />
		</div>
	);
};
