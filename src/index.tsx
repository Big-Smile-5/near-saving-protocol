import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "contexts/theme";
import { lightTheme } from "themes/lightTheme";
import { darkTheme } from "themes/darkTheme";
import SFfont from "assets/fonts/GlobalFonts";
import { GlobalStyle } from "themes/GlobalStyle";
import * as buffer from 'buffer';
(window as any).Buffer = buffer.Buffer;

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider
            initialTheme="dark"
            lightTheme={lightTheme}
            darkTheme={darkTheme}
        >
            <SFfont />
            <div>
                <GlobalStyle />
                <App />
            </div>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
