import {useContext, createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthProvider";
import DefaultAvatar from "../defaults/avatar.png"

const AvatarContext = createContext({})

export const AvatarProvider = ({ children }) => {
    const [img, setImg] = useState();
    const authProvider = useAuthContext();
    useEffect(() => {
        if(authProvider?.auth.token){
            if(localStorage.getItem(`${authProvider.auth.token}_avatar`))
            {
                setImg(
                    localStorage.getItem(`${authProvider.auth.token}_avatar`)
                )
            }else{
                setImg(
                    DefaultAvatar
                )
            }
        }
    }, [authProvider.auth])

    return (
        <AvatarContext.Provider value={img}>
            {children}
        </AvatarContext.Provider>
    )
}

export default AvatarContext;

export const useImgContext = () => useContext(AvatarContext);