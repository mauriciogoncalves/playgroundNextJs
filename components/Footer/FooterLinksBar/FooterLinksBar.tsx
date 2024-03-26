"use client"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {FooterLinksBarButton} from "./FooterLinksBarButton";

export default function FooterLinksBar() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    // @ts-ignore
    return (
        <div className={"footer-links-row-container"}>
            <div className={"footer-links-row"}>
                <FooterLinksBarButton href={"#"}>Imprint</FooterLinksBarButton>
                <FooterLinksBarButton href={"#"}>About Us</FooterLinksBarButton>
                <FooterLinksBarButton href={"#"}>Contact</FooterLinksBarButton>
                <FooterLinksBarButton href={"#"}>Terms & Conditions</FooterLinksBarButton>
                <FooterLinksBarButton href={"#"}>Privacy Policy</FooterLinksBarButton>
                <FooterLinksBarButton href={"#"}>Support</FooterLinksBarButton>
            </div>
        </div>
    );
}