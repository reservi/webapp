import React from "react";

import { Form, Wrapper, Input, UserFullName } from "./UserAccount.styles";

// contexts
import { useAuthContext } from "../../../context/AuthProvider";
import { useImgContext } from "../../../context/AvatarProvider";
import Avatar from 'react-avatar';

const UserAccount = () => {
    const authContext = useAuthContext();
    const [userData, setUserData] = React.useState({...authContext.auth})
    const avatar = useImgContext()
    React.useEffect(() => {
        if(userData.username){
            return;
        }
        setUserData(authContext.auth)
    }, [authContext.auth, userData])

    return (
        <Form>
            <Wrapper>
                <h2>Ustawienia konta</h2>
                <span className="tmp">
                    <Avatar
                        name={`${userData.name} ${userData.surename}`}
                        src={avatar ?  avatar : null}
                        size="150"
                        round={true}
                        className='avatar'

                    />
                    <UserFullName>{`${userData.name} ${userData.secondName ? userData.secondName : ""} ${userData.surename}`}</UserFullName>
                </span>
                <h3>Twoje dane</h3>

                <span>
                    <Input type="text" disabled={true} value={userData.username}/>
                    <label>Login</label>
                </span>

                <span>
                    <Input type="text"
                        onChange={e => setUserData({...userData, phoneNumber: e.target.value})}
                        value={userData.phoneNumber ? userData.phoneNumber : ""}
                    />
                    <label>Numer Telefonu</label>
                </span>

                <span>
                    <Input
                        type="text"
                        onChange={e => setUserData({...userData, email: e.target.value})}
                        value={userData.email ? userData.email : ""}
                    />
                    <label>Email</label>
                </span>

            </Wrapper>
            <Wrapper>
                <h2>Dane logowania</h2>

                <p>Ostatnia próba logowania</p>
                <p>Ostatnie udane logowanie</p>
                <p>Ostatnia nieudana próba logowania</p>
            </Wrapper>
        </Form>
    )
}

export default UserAccount;