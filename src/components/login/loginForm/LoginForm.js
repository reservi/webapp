import React from "react";
import { Forms, Wrapper, Header, TextInput} from "./LoginForm.styles";

const LoginForm = setLoginForm => {

    return (
        <Wrapper>
            <Forms>
                <Header>Zaloguj się</Header>
                <TextInput type="text" placeholder="Username"/>
                <TextInput type="text" placeholder="Username"/>
            </Forms>
        </Wrapper>
    )
}

export default LoginForm;