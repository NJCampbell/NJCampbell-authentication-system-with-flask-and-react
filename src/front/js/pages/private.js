import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
        <h1>Private Area, Only Authorized Users Allowed!</h1>
        </>
    )
}