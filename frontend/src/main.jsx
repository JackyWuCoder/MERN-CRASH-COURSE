import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// import system
import { system } from "@chakra-ui/react/preset";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* pass system value here */}
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
