import React from "react"; // Core React library
import ReactDOM from "react-dom/client"; // New React 18 API for rendering
import App from "./App.jsx"; // The main component of application
import { ChakraProvider } from "@chakra-ui/react"; // Provides Chakra UI's theme, style, and components
// import system (!!!Required for ChakraProvider to work!!!)
import { system } from "@chakra-ui/react/preset";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* pass system value here */}
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
