'use client';
import {createTheme} from '@mui/material/styles';
import {Metadata} from "next";
import {Roboto} from 'next/font/google';

export const metadata: Metadata = {
    title: "Vieira",
    twitter: {
        card: "summary_large_image",
    },
    /**
    openGraph: {
        url: "https://next-enterprise.vercel.app/",
        images: [
            {
                width: 1200,
                height: 630,
                url: "https://domain.com/project-logo.png",
            },
        ],
    },
    **/
}

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#c62fe1',
        },
    },
});

export const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
});

export default theme;