"use client"
import {ThemeProvider} from '@mui/material/styles';
import React, {useEffect} from "react";
import {useGlobals} from './globalsContext';
import {darkTheme, theme} from "./theme";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Water1 from "../components/Particles/Water1";


export default function Web() {
    const {isWhiteTheme} = useGlobals();
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles?.parentElement) jssStyles.parentElement.removeChild(jssStyles);
    }, []);
    return (
        <ThemeProvider theme={!isWhiteTheme ? darkTheme : theme}>
            <section className="flexCol" style={{minHeight: "100vh", minWidth: "100vw", zIndex: "0", position: "relative"}}>
                <Header></Header>
                <Water1></Water1>
                <div style={{flex: "1"}}
                     className="select-none pointer-events-none mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
                    <div className="select-none pointer-events-none  mx-auto place-self-center">
                        <h1 className="select-none pointer-events-none mb-4 max-w-2xl text-4xl font-extrabold text-gray-500 leading-none tracking-tight dark:text-gray- md:text-5xl xl:text-6xl">
                            Playground<br />Next.js Enterprise
                        </h1>
                        <p className="select-none  pointer-events-none  mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Sed turpis tincidunt id aliquet risus feugiat.
                        </p>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        </ThemeProvider>
    )
}
