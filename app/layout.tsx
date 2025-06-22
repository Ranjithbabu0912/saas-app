import type {Metadata} from "next";
import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    description: "Real-time AI Teaching Platform",
    title: "SmartScholar",
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ClerkProvider appearance={{variables: {colorPrimary: '#fe5933'}}}>
            <Navbar/>
            {children}
        </ClerkProvider>
        </body>
        </html>
    );
}
