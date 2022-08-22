
import React from 'react';

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthProvider';
import { useImgContext } from "../../../context/AvatarProvider";

import { Wrapper, UserName, List, Line } from './UserPanel.styles';

import Avatar from 'react-avatar';

const LOGOUT_URL='http://localhost/api/auth/logout'

const UserPanel = () => {
    const [visible, setVisible] = React.useState(false);
    const authContext = useAuthContext();
    const avatar = useImgContext();

    const handleLogout = async e => {
        e.preventDefault()
        fetch(LOGOUT_URL, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authContext.auth.token}`
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
              }).then(() => {
                console.log("Logged out")
              })
        sessionStorage.removeItem("authData")
        authContext.setAuth({})
    }

    return (
        <Wrapper visible={visible}>
            <UserName
                onClick={e => setVisible(!visible)}
            ><span>{`${authContext?.auth.name} ${authContext?.auth.surename}`}</span></UserName>
            <Avatar
                name={`${authContext.auth.name} ${authContext.auth.surename}`}
                src={avatar ?  avatar : null}
                size="25"
                round={true}
                className="avatar"
            />
            {
                visible ?
                <List>
                    <li><Link to='/profile' onClick={e => setVisible(false)}>Ustawienia</Link></li>
                    <Line/>
                    <li onClick={handleLogout}>Wyloguj się</li>
                </List> : ""
            }
        </Wrapper>
    )
}

export default UserPanel;