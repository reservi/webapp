import React, { useEffect, useState } from "react";

import LoginButton from "../login/loginButton/LoginButton";
import LoginForm from "../login/loginForm/LoginForm";

import { HeaderFrame } from "./Header.styles";

const Header = () => {
    const [loginForm, setLoginForm] = useState(false)

    useEffect(() => {
        console.log(loginForm)
    }, [loginForm])

    return (
        <HeaderFrame>
            <LoginButton setLoginForm={setLoginForm}/>
            {loginForm ? <LoginForm /> : null}
        </HeaderFrame>
    )
}

export default Header;