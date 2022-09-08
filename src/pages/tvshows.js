import Head from 'next/head';
import {useEffect, useState} from 'react';
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

const MoreContentButton = styled.button`
	width: 100%;
	padding: 16px;
	border: none;
	background-color: #08a;
	color: white;
	text-align: center;
`;

export default function TvShows() {
	const API_KEY = process.env.API_KEY;

	const [pageCounter, setPageCounter] = useState(2);
	const [allData, setData] = useState([]);
	const [nextURL, setNextURL] = useState(
		`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2
		}`
	);
	const [apiURL, setApiURL] = useState(
		`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
	);
	const {loading, error, data} = useFetch(apiURL);

	useEffect(() => {
		if (data) {
			data.results = [...allData, ...data.results];
			setData(() => [...data.results]);
		}
	}, [data]);

	useEffect(() => {
		setNextURL(
			`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageCounter}`
		);
	}, [pageCounter]);

	function loadNextContent() {
		setPageCounter(1 + pageCounter);
		setApiURL(nextURL);
	}
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
			<HaEins>TV-Shows</HaEins>
			{loading && <p>Loading...</p>}
			{error && <p>The content could not be loaded. Please try again.</p>}
			{data && <MovieList data={data.results} type="tv" />}
			<MoreContentButton onClick={loadNextContent}>load more content</MoreContentButton>
		</Layout>
	);
}
