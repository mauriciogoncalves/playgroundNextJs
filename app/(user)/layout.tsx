"use client"
import {ThemeProvider} from '@mui/material/styles';
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Transitions, {Animate} from "../../components/Transitions/Transitions";
import {useGlobals} from '../globalsContext';
import {darkTheme, theme} from "../theme";

export default function RootLayout({children}: { children: React.ReactNode }) {
    const {isWhiteTheme} = useGlobals();
    return (
        <>
            <ThemeProvider theme={!isWhiteTheme ? darkTheme : theme}>
                <Transitions className="h-full flex flex-col ">
                    <section className="flexCol flexMainPage">
                        <Header></Header>
                        <Animate className="flex flex-1 height100" >
                            {children}
                        </Animate>
                        <Footer></Footer>
                    </section>
                </Transitions>
            </ThemeProvider>
        </>
    )
}

