"use client"
import {ThemeProvider} from '@mui/material/styles';
import NextTopLoader from "nextjs-toploader";
import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Transitions, {Animate} from "../../../components/Transitions/Transitions";
import {useGlobals} from '../../globalsContext';
import {darkTheme, theme} from "../../theme";

export default function RootLayout({children}: { children: React.ReactNode }) {
    const {isWhiteTheme} = useGlobals();
    return (
        <>
            <ThemeProvider theme={!isWhiteTheme ? darkTheme : theme}>
                <NextTopLoader
                    color={!isWhiteTheme ? darkTheme.palette.secondary.main : darkTheme.palette.primary.main}
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={!isWhiteTheme ? 4 : 3}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
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

