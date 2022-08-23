import Head from 'next/head';
import {useEffect} from 'react';

import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import useStore from '../hooks/useStore';

const API_KEY = 'cfe8f1e1a9b233b64412ec3cd0525b67';
const GET_CONFIGURATION = 'https://api.themoviedb.org/3/configuration?api_key=' + API_KEY;

//const GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const GET_TV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export default function HomePage() {
	// Global state
	const setConfiguration = useStore(state => state.setConfiguration);
	const setData = useStore(state => state.setData);
	const setConfigurationLoaded = useStore(state => state.setConfigurationLoaded);
	const isConfigurationLoaded = useStore(state => state.isConfigurationLoaded);

	const hasLoadingErrorOccured = useStore(state => state.hasLoadingErrorOccured);
	const setLoadingErrorOccured = useStore(state => state.setLoadingErrorOccured);

	useEffect(() => {
		if (hasLoadingErrorOccured) setLoadingErrorOccured(false);

		Promise.all([fetch(GET_TV), fetch(GET_CONFIGURATION)])
			.then(function (responses) {
				return Promise.all(
					responses.map(function (response) {
						return response.json();
					})
				);
			})
			.then(function (data) {
				console.log('Data');
				console.log(data);

				setConfiguration(data[1].images);
				setData(data[0].results);
				setConfigurationLoaded(true);
			})
			.catch(function (error) {
				console.log('Error: ' + error);
				setLoadingErrorOccured(true);
			});
	}, [
		hasLoadingErrorOccured,
		setConfiguration,
		setConfigurationLoaded,
		setData,
		setLoadingErrorOccured,
	]);

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
			{hasLoadingErrorOccured ? (
				<p>The content could not be loaded. Please try again.</p>
			) : null}
			{isConfigurationLoaded ? <MovieList /> : null}
		</Layout>
	);
}
