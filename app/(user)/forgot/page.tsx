"use client"
import {SentimentDissatisfied} from "@mui/icons-material";
import {Fade, Zoom} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";
import InputEmail from "../../../components/Input/Fields/Email/InputEmail";

export default function ForgotPassword() {
    const submitForgotPasswordEmail = async () => {
        const response = await fetch("/api/health", {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email')
        });
    };

    return (

        <section className="loginSection" style={{"display": "flex", "flex": 1}}>
            <CssBaseline/>
            <Grid container component="main" sx={{height: '80vh', display: "flex", flex: 1}}>

                <Fade in={true} timeout={2200}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers&2)',
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
                                <SentimentDissatisfied/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Forgot password?
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
                                <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                                    <Typography component="p">
                                        Send me an e-mail
                                    </Typography>
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href={"/login"} variant="body2">
                                            <Typography component="p">
                                                Return to Login
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
        </section>

    );
}
