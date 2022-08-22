import Head from 'next/head';
import {useEffect} from 'react';

import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import useStore from '../hooks/useStore';

const API_KEY = 'cfe8f1e1a9b233b64412ec3cd0525b67';
const GET_CONFIGURATION = 'https://api.themoviedb.org/3/configuration?api_key=' + API_KEY;

const GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=cfe8f1e1a9b233b64412ec3cd0525b67&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

// for later

//const GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=cfe8f1e1a9b233b64412ec3cd0525b67&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${firstpage}&with_genres=${genres}`;
//const GET_TV = `https://api.themoviedb.org/3/discover/tv?api_key=1e37d8deae00c9b519356f5d9412edbb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${firstpage}&with_genres=${genres}`;

export default function HomePage() {
	// Global state
	const setConfiguration = useStore(state => state.setConfiguration);
	const setData = useStore(state => state.setData);

	useEffect(() => {
		Promise.all([fetch(GET_CONFIGURATION), fetch(GET_MOVIES)])
			.then(function (responses) {
				return Promise.all(
					responses.map(function (response) {
						return response.json();
					})
				);
			})
			.then(function (data) {
				console.log('Promise.all() should be done.');
				console.log(data);
				setConfiguration(data[0].images);
				setData(data[1].results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [setConfiguration, setData]);

	return (
		<Layout>
			<Head>
				<title key="title">Favorite Movie App</title>
				<meta
					key="description"
					name="description"
					content="Robert Reichs capstone project"
				/>
			</Head>
			<h1>Movie Bookmark App</h1>
			<MovieList />
		</Layout>
	);
}
