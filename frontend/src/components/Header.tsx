// @ts-ignore
import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import Logo from "./shared/Logo.tsx";
import {userAuth} from "../context/AuthContext.tsx";
import NavLink from "./shared/NavLink.tsx";

const Header = () => {
    const auth = userAuth();
    return (
        <AppBar
            sx={{bgcolor: 'transparent', position: 'static',boxShadow: 'none'}}>
            <Toolbar sx={{display: 'flex'}}>
                <Logo/>
                <>
                    {auth?.isLoggedIn ?
                        <>
                            <NavLink to={'/chat'} bg={'#406e5a'} text={"Chats"} textColor={"#ffffff"}/>
                            <NavLink to={'/logout'} bg={'#51538f'} text={"Logout"} textColor={"#fff"} onClick={() => auth.logout()}/>
                        </> :
                        <>
                            <NavLink to={'/login'} bg={'#406e5a'} text={"Login"} textColor={"#ffffff"}/>
                            <NavLink to={'/register'} bg={'#51538f'} text={"Register"} textColor={"#fff"} />
                        </> }
                </>
            </Toolbar>
        </AppBar>
    );
};

export default Header;