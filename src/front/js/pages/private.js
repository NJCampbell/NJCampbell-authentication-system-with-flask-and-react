import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";

const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        // (store.token ? <div className="text-center mt-5">

        //     {/* <button onClick={handleLogout} className="btn btn-secondary">
        // 	Logout
        // </button> */}
        //     <h1>{store.homeMessage}</h1>


        // </div> : 


        <div className="text-center mt-5">
            {/* <Navbar /> */}
            <h1>Welcome to the exclusive private page!</h1>
            <h2>Only authorized users can see this area!</h2>
            <h3>Lucky you!</h3>
        </div>)

};

export default Private;