import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Signup = () => {
    return (
        <div align="center">
            <h1>Hello Signup!</h1>
            <input
            type="text"
            placeholder="enter email"></input>
            <input
            type="password"
            placeholder="enter password"></input>
            <button>Sign up</button>
        </div>
    )
}

export default Signup