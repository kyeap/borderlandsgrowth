import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import theme from "./theme";

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      {element}
    </ChakraProvider>
  )
}