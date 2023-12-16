import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom"; // Import the Router component
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}> 
      <BrowserRouter>
       <Router /> 
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}