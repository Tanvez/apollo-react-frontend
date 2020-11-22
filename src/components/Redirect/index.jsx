import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_URL } from "../../graphqlApi";

export default () => {
	let { slug } = useParams();
	const { loading, error, data } = useQuery(GET_URL, { variables: { slug } });
	if (loading) return <p>Loading ...</p>;
	if (error) return <p> TO DO ERROR PAGE</p>;
	const { shortUrl } = data;
	window.open(shortUrl.url);
	return <Redirect to="/" />;
};
