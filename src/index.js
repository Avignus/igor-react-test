import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/ThemeProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
});

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
