import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router} from "react-router-dom";
import theme from "./theme";
import { ColorModeScript } from '@chakra-ui/react'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Router>
  </StrictMode>
);


