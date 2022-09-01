import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieListSmall from '../components/MovieListSmall';
import SingleItem from '../components/SingleItem';
import useFetch from '../hooks/useFetch';

const Ho1 = styled.h1`
	margin: 0 16px 0 8px;
	padding: 80px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;
const Ho2 = styled.h2`
	margin: 32px 16px 0 8px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

export default function Movies() {
	const API_KEY = process.env.API_KEY;

	const GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

	const GET_TV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

	const GET_EDITORPICK = `https://api.themoviedb.org/3/movie/438631?api_key=${API_KEY}&language=en-US`;

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
			<Ho1>Editors Pick</Ho1>
			{loadingSingle && <p>Loading...</p>}
			{errorSingle && <p>The content could not be loaded. Please try again.</p>}
			{dataSingle && <SingleItem data={dataSingle} type="movie" />}

			<Ho2>The newest Movies you need to see</Ho2>
			{loading && <p>Loading...</p>}
			{error && <p>The content could not be loaded. Please try again.</p>}
			{data && <MovieListSmall data={data.results} type="movie" />}

			<Ho2>The newest TV Series in town</Ho2>
			{loadingTV && <p>Loading...</p>}
			{errorTV && <p>The content could not be loaded. Please try again.</p>}
			{dataTV && <MovieListSmall data={dataTV.results} type="tv" />}
		</Layout>
	);
}
