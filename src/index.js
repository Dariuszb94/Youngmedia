import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./index.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";

const client = new ApolloClient({
  uri: "https://wp.na.stronazen.pl/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <Header />
      <Homepage />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
