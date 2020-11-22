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
