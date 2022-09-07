import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieListSmall from '../components/MovieListSmall';
import SingleItem from '../components/SingleItem';
import useFetch from '../hooks/useFetch';

const HaEins = styled.h1`
	margin: 0 16px 0 8px;
	padding: 0 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
	& span {
		font-size: 16px;
		font-style: italic;
	}
`;
const HaZwei = styled.h2`
	margin: 32px 16px 0 8px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

export default function Movies() {
	const API_KEY = process.env.API_KEY;
	const strLanguage = 'en-us'; //'de-DE';

	const GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${strLanguage}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

	const GET_TV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=${strLanguage}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

	// Dune: 438631 - Star Wars I: 11
	const GET_EDITORPICK = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&language=${strLanguage}`;

	const {loading: loadingSingle, error: errorSingle, data: dataSingle} = useFetch(GET_EDITORPICK);
	const {loading, error, data} = useFetch(GET_MOVIES);
	const {loading: loadingTV, error: errorTV, data: dataTV} = useFetch(GET_TV);

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
			<HaEins>
				Feature <span>(Pinke Seife ist geiler Shit!)</span>
			</HaEins>
			{loadingSingle && <p>Loading...</p>}
			{errorSingle && <p>The content could not be loaded. Please try again.</p>}
			{dataSingle && <SingleItem data={dataSingle} type="movie" />}

			<HaZwei>New Movies</HaZwei>
			{loading && <p>Loading...</p>}
			{error && <p>The content could not be loaded. Please try again.</p>}
			{data && <MovieListSmall data={data.results} type="movie" />}

			<HaZwei>New TV Series</HaZwei>
			{loadingTV && <p>Loading...</p>}
			{errorTV && <p>The content could not be loaded. Please try again.</p>}
			{dataTV && <MovieListSmall data={dataTV.results} type="tv" />}
		</Layout>
	);
}
