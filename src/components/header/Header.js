import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";

import LoginButton from "../login/loginButton/LoginButton";
import LoginForm from "../login/loginForm/LoginForm";
import UserPanel from "../User/UserPanel/UserPanel";

import { HeaderFrame } from "./Header.styles";

const Header = ({isLoggedIn}) => {
    const [loginForm, setLoginForm] = useState(false);
    const authContext = useAuthContext()?.auth;

    return (
        <HeaderFrame>
            {isLoggedIn && authContext.username ? <UserPanel /> : <LoginButton setLoginForm={setLoginForm}/>}
            {loginForm ? <LoginForm setLoginForm={setLoginForm}/> : null}
        </HeaderFrame>
    )
}

export default Header;