import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";

import LoginButton from "../login/loginButton/LoginButton";
import LoginForm from "../login/loginForm/LoginForm";

import { HeaderFrame } from "./Header.styles";

const Header = ({isLoggedIn}) => {
    const [loginForm, setLoginForm] = useState(false);
    const authContext = useAuthContext()?.auth;

    useEffect(() => {
        if(Object.keys(authContext).length === 0){
            return;
        }
        console.log(authContext)
    },
    [authContext])

    return (
        <HeaderFrame>
            {isLoggedIn ? <p>{`${authContext.name} ${authContext.surename}`}</p> : <LoginButton setLoginForm={setLoginForm}/>}
            {loginForm ? <LoginForm setLoginForm={setLoginForm}/> : null}
        </HeaderFrame>
    )
}

export default Header;