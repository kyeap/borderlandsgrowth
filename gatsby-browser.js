import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS={true}>
      {element}
    </ChakraProvider>
  )
}