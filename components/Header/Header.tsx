import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from "@mui/material/Link";
import Paper from '@mui/material/Paper';
import Tooltip from "@mui/material/Tooltip";
import React from 'react';
import AccountMenu from "./AccountMenu/AccountMenu";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import {useGlobals} from "../../app/globalsContext";
import MainLogo from "../Asset/Logo/Logo";
import DarkModeSelector from "./DarkModeSelector/DarkModeSelector";

export interface HeaderProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
    className?: string
}

export default function Header({...props}: HeaderProps) {
    const {globalVariable} = useGlobals();
    return (
        <Grid component={Paper} elevation={6} square style={{width: '100%', zIndex: "100"}}>
            <CssBaseline/>
            <div className={"header-links-row-container headerFlexRow max-w-full"}>
                <Link className={"flexRow header-links-left"} href={"/"}>
                    <MainLogo></MainLogo>
                </Link>
                {/*<div className={"header-links-middle flexRow max-w-full"}>*/}
                {/*    <HeaderLinksPrimaryBar></HeaderLinksPrimaryBar>*/}
                {/*</div>*/}
                <div className={"flexRow header-links-right"}>
                    <DarkModeSelector></DarkModeSelector>
                    {globalVariable?.isLogged ? (
                        <AccountMenu></AccountMenu>
                    ) : (
                        <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                            <Tooltip title="Login">
                                <Link href={"/login"}>
                                    <Avatar sx={{width: 32, height: 32}}></Avatar>
                                </Link>
                            </Tooltip>
                        </Box>
                    )}
                    <LanguageSelector></LanguageSelector>
                </div>
            </div>
        </Grid>
    );
}