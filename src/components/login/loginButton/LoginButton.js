import { Button } from "./LoginButton.syles"

const LoginButton = ({setLoginForm}) => {
    return (
        <Button
            onClick={() => setLoginForm(true)}
        >
        Zaloguj się
        </Button>
    )
}

export default LoginButton