import React, { useContext } from "react";
import { Forms, Wrapper, Header, Text, TextInput, CloseButton, Line, LoginButton, ErrorMsg } from "./LoginForm.styles";
import AuthContext from "../../../context/AuthProvider";

const LOGIN_URL='http://localhost/api/auth/login'
const USER_DATA='http://localhost/api/auth/me'

const LoginForm = ({setLoginForm}) => {
    const [inputs, setInputs] = React.useState({});
    const [errorMsg, setErrorMsg] = React.useState("")
    const [token, setToken] = React.useState("")
    const {setAuth} = useContext(AuthContext)

    React.useEffect( ()=>{
        const getUserData = async () => {
            if(!token){
                return;
            }
            const userData = await fetch(USER_DATA, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            }).then(data => {
                if(!data.ok){
                    throw new Error('Unauthorized!!')
                }
                return data.json()
            }).then(data => {
                return data
            }).catch(err => {
                console.log(err)
                setErrorMsg("Nieprawidłowy token. Zaloguj się jeszcze raz")
            })

            if(!errorMsg){
                setAuth({token: token, ...userData});
                setErrorMsg("Logowanie poprawne");
                setLoginForm(false);
            }
        }
        getUserData()
    }, [token, setAuth, setLoginForm, errorMsg])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg("")
        const authToken = await fetch(LOGIN_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: `username=${inputs.username}&password=${inputs.password}`
        }).then(data => {
            if(!data.ok){
                throw new Error('Unauthorized!!')
            }
            return data.json()
        }).then(data => {
            return data.access_token
        }).catch(err => {
            console.log(err)
            setErrorMsg("Login lub haslo niepoprawne")
        })

        setToken(authToken)
    }

    return (
        <Wrapper>
            <Forms onSubmit={handleSubmit}>
                <CloseButton
                    type='button'
                    onClick={e => {
                        e.preventDefault();
                        setLoginForm(false);
                    }
                }
                >X</CloseButton>
                <Header>Zaloguj się</Header>
                {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
                <Line/>
                <Text>Username</Text>
                <TextInput
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
                <Text>Password</Text>
                <TextInput
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                />
                <Line/>
                <LoginButton type="submit" value="Zaloguj"/>
            </Forms>
        </Wrapper>
    )
}

export default LoginForm;