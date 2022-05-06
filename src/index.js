import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --primary-background-color: #0e2a48;
  --primary-text-color: #afd1f5;
  --secondary-text-color: #99b4d2;
  --fancy-color:#04fbbd;
}

*{
  box-sizing: border-box;
  font-family: 'Cairo', sans-serif;
  color: var(--fancy-color);  
  margin: 0;
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}
body{
  margin: 0;
  padding: 0;
  background-color: var(--primary-background-color);
  position: relative;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
