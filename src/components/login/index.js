import React from "react";

export const Login = ({setPassword, setUsername, loginHandler}) => {
    return(
        <form onSubmit={loginHandler}>
            <input placeholder="Username" onChange = {(e) => setUsername(e.target.value)}/>
            <input placeHolder="Password" onChange = {(e) => setPassword(e.target.value)}/>
        </form>
    )
}