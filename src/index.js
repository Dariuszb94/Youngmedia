import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./index.css";
import PostsSearch from "./PostsSearch";
import Header from "./Components/Header/Header";

const client = new ApolloClient({
  uri: "https://wp.na.stronazen.pl/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <Header />
      {/* <PostsSearch /> */}
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
