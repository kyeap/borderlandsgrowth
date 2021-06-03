import React from "react";
import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            h1: {
                fontSize:"36px",
                margin:"15px 0",
            },
            h2: {
                fontSize:"30px",
                margin:"15px 0",
                lineHeight: "normal"
            },
            p : {
                fontSize: "18px",
                margin:"10px 0",
            },
            a : {
                textDecoration: "underline",
            }
        },
    },
    lineHeights: {
        base: "normal",
    },
    colors: {
        blue: "rgb(0, 140, 201)",
    }
})

export default theme;