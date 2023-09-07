import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

    const handleLogin = () => {
        const options = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "email": email, 
                    "password": password
                }
            )
        }
        fetch("https://turbo-umbrella-r47r557gg5xhw7v9-3001.app.github.dev/api/token", options)
        .then(response => {
            if(response.status == 200) return response.json();
        })
        .then(data => console.log("Access token: ", data))
        .catch(error => console.log("There was an error", error))
    }   

    return (
        <div align="center">
            <h1>Hello Login!</h1>
            <input
            type="text"
            value={email}
            placeholder="enter email" onChange={e => setEmail(e.target.value)}></input>
            <input
            type="password"
            value={password}
            placeholder="enter password" onChange={e => setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login