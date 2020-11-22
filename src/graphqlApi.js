import { gql } from "@apollo/client";

export const GET_URL = gql`
	query ShortUrl($slug: String!) {
		shortUrl(slug: $slug) {
			id
			url
			slug
		}
	}
`;

export const CREATE_URL = gql`
	mutation CreateShortUrl($slug: String!, $url: String!) {
		createShortUrl(slug: $slug, url: $url) {
			id
			url
			slug
		}
	}
`;
