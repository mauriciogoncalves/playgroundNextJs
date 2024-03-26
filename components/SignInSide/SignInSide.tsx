"use client"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Fade, Zoom} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import InputEmail from "../Input/Fields/Email/InputEmail";
import InputPassword from "../Input/Fields/Password/InputPassword";

export default function SignInSide() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid container component="main" sx={{height: '100%', display: "content"}}>
            <CssBaseline/>
            <Fade in={true} timeout={1000}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers&1)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            </Fade>
            <Zoom in={true}>
                <Grid item xs={12} sm={8} md={5} className={"flexCenter pb-2.5"}>
                    <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                         style={{margin: "auto", maxWidth: "400px", paddingBottom: "2vw"}}>
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                            <InputEmail
                                required={true}
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <InputPassword
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>
                            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                                <Typography component="p">
                                    Sign In
                                </Typography>
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href={"/forgot"} variant="body2">
                                        <Typography component="p">
                                            Forgot password?
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="" variant="body2">
                                        <Typography component="p">
                                            Don&#39;t have an account? Sign Up
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Zoom>
        </Grid>
    );
}