import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import {Copyright} from "./Copyright/Copyright";
import FooterLinksBar from "./FooterLinksBar/FooterLinksBar";

export default function Footer() {
    return (
        <Grid container component="footer"   style={{width: '100%'}} >
            <CssBaseline/>
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <FooterLinksBar></FooterLinksBar>
                <Copyright sx={{mt: 5}}/>
            </Grid>
        </Grid>
    );
}