import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import useFetch from '../hooks/useFetch';

const HaEins = styled.h1`
	margin: 0 16px 0 8px;
	padding: 80px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

export default function Movies() {
	const API_KEY = process.env.API_KEY;
	let pageCounter = 1;
	const GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageCounter}`;

	const {loading, error, data} = useFetch(GET_MOVIES);

	return (
		<Layout>
			<Head>
				<title key="title">Movie Bookmark App</title>
				<meta
					key="description"
					name="description"
					content="Robert Reichs capstone project"
				/>
			</Head>
			<HaEins>Movies</HaEins>
			{loading && <p>Loading...</p>}
			{error && <p>The content could not be loaded. Please try again.</p>}
			{data && <MovieList data={data.results} type="movie" />}
		</Layout>
	);
}
