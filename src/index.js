import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://1igfg.sse.codesandbox.io/",
});

// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { ApolloProvider } from "react-apollo";
// import { HttpLink } from "apollo-link-http";
// const client = new ApolloClient({
// 	cache: new InMemoryCache(),
// 	link: new HttpLink({
// 		uri: `https://1igfg.sse.codesandbox.io/`,
// 	}),
// });

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	rootElement
);
