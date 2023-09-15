import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


const Private = () => {
    const { store, actions } = useContext(Context);

    if (store.token || store.token === "" || store.token === undefined) {
        {

            return (

                <div className="text-center mt-5">
                    <h1>Welcome to the exclusive private page!</h1>
                    <h2>Only authorized users can see this area!</h2>
                    <h3>Lucky you!</h3>
                </div>)
        }
    }
};

export default Private;