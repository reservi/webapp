import {useContext, createContext, useState } from "react";

const localState = JSON.parse(sessionStorage.getItem("authData"));
const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localState || {});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

export const useAuthContext = () => useContext(AuthContext);