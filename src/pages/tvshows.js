import Head from 'next/head';

import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import useFetch from '../hooks/useFetch';

export default function TvShows() {
	//
	const API_KEY = process.env.API_KEY;
	const GET_TV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

	const {loading, error, data} = useFetch(GET_TV);

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
			{loading && <p>Loading...</p>}
			{error && <p>The content could not be loaded. Please try again.</p>}
			{data && <MovieList data={data.results} type="tv" />}
		</Layout>
	);
}
