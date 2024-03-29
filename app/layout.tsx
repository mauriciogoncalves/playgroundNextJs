import "../styles/tailwind.css"
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import React from "react";
import {GlobalsProvider} from "./globalsContext";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Playground NextJs</title>
            <link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon"/>
        </head>
        <body>
        <AppRouterCacheProvider options={{key: 'css', enableCssLayer: false}}>
            <GlobalsProvider>
                {children}
            </GlobalsProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}


