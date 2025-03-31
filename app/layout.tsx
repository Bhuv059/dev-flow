import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import {Toaster} from "@/components/ui/toaster";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";


const inter = localFont({
    src: "./fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 700 800 900",
});
/*
const spaceGrotesk = localFont({
    src: "./fonts/SpaceGroteskVF.ttf",
    variable: "--font-space-grotesk",
    weight: "300 400 500 700",
});*/

const gidole = localFont({
    src: "./fonts/GidoleRegular.ttf",
    variable: "--font-gidole",
    weight: "300 400 500 700",
});

export const metadata: Metadata = {
    title: "DevFlow",
    description: "A community-driven platform for developers to share their knowledge.",
    icons:{
        icon: '/images/site-logo.svg'
    }
};

const RootLayout= async ({children,}: { children: React.ReactNode; }) => {

    const session = await auth();
    console.log(session)
    return (
        <html lang="en"  suppressHydrationWarning >
        <SessionProvider >
        <body
            className={`${inter.className} ${gidole.variable}  antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        <Toaster />
        </body>
        </SessionProvider>
        </html>
    );
}
export default RootLayout;