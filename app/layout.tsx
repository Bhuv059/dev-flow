import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import "./globals.css";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} ${gidole.variable}  antialiased`}
        >
        {children}
        </body>
        </html>
    );
}