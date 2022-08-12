import React from 'react';
import { Wrapper, Menu } from './UserProfile.styles';

import { NavLink, Outlet } from 'react-router-dom';

const UserProfile = () => {
    return (
        <Wrapper>
            <Menu>
                <li>
                    <NavLink
                        to="account"
                        className={(navData) => (navData.isActive ? 'activeBar' : '')}
                    >Konto</NavLink>
                </li>
                <li>
                    <NavLink
                        to="password"
                        className={(navData) => (navData.isActive ? 'activeBar' : '')}
                    >Hasło</NavLink>
                </li>
                <li>
                    <NavLink
                        to="integration"
                        className={(navData) => (navData.isActive ? 'activeBar' : '')}
                    >Integracja</NavLink>
                </li>
            </Menu>
            <Outlet/>
        </Wrapper>
    )
}

export default UserProfile