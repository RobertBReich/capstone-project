import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieListSearch from '../components/MovieListSearch';
import useFetch from '../hooks/useFetch';

const HaEins = styled.h1`
	margin: 0 16px 0 8px;
	padding: 80px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

const HaZwei = styled.h1`
	margin: 0 16px 0 8px;
	padding: 80px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

export default function Movies() {
	const API_KEY = process.env.API_KEY;

	// Search
	const MOVIE_QUERY = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=star%20wars&page=1&include_adult=false`;

	const TV_QUERY = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=star%20wars&page=1&include_adult=false`;

	const {loading, error, data} = useFetch(MOVIE_QUERY);
	const {loading: loadingTv, error: errorTv, data: dataTv} = useFetch(TV_QUERY);
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
			<input></input>
			{loading && <p>Loading...</p>}
			{error && <p>The content could not be loaded. Please try again.</p>}
			{data && <MovieListSearch data={data.results} />}
			<HaZwei>TV-Shows</HaZwei>
			{loadingTv && <p>Loading...</p>}
			{errorTv && <p>The content could not be loaded. Please try again.</p>}
			{dataTv && <MovieListSearch data={dataTv.results} type="tv" />}
		</Layout>
	);
}
