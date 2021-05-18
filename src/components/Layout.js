import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

import '../styles/main.css';

export default function Layout ({children}) {
    return (
        <>
            <Header/>
            {children}  
            <Footer />
        </>
    )
}