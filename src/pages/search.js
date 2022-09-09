import Head from 'next/head';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieListSearch from '../components/MovieListSearch';
import useFetch from '../hooks/useFetch';

const HaEins = styled.h1`
	margin: 0 16px 0 0;
	padding: 16px 8px 16px 0;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

const HaZwei = styled.h2`
	margin: 0 16px 0 0;
	padding: 16px 8px 16px 0;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	margin: 16px auto;
	padding: 12px 16px 12px 40px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	outline: 0;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.15);
	font-size: 15px;
`;

const SearchBarContainer = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	margin-top: 64px;
	padding: 0 24px;
`;

const ResultContainer = styled.div`
	display: flex;
	padding: 0 24px 64px 24px;
	gap: 16px;
	@media screen and (max-width: 600px) {
		display: block;
		width: 100%;
		gap: 16px;
	}
`;

const SearchButton = styled.button`
	position: absolute;
	top: 25px;
	left: 32px;
	border: none;
	background: none;

	&::before {
		content: '🔎';
		display: block;
	}

	&:focus {
		outline: 0;
	}
`;
const ResponsiveContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export default function Movies() {
	const API_KEY = process.env.API_KEY;

	const [searchQuery, setSearchQuery] = useState('abcdefg');
	const [movieSearchURL, setMovieSearchURL] = useState(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
	);

	const [tvSearchURL, setTvSearchURL] = useState(
		`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
	);

	const {loading, error, data} = useFetch(movieSearchURL);
	const {loading: loadingTv, error: errorTv, data: dataTv} = useFetch(tvSearchURL);

	let placeholder = ' Tippe um zu suchen...';

	useEffect(() => {
		setMovieSearchURL(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURI(
				searchQuery
			)}&page=1&include_adult=false`
		);
		setTvSearchURL(
			`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURI(
				searchQuery
			)}&page=1&include_adult=false`
		);
	}, [searchQuery]);

	function handleSearch(event) {
		event.preventDefault();
		let newSearchQuery = document.forms[0][0].value;
		setSearchQuery(newSearchQuery);
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
			<SearchBarContainer>
				<form onSubmit={handleSearch}>
					<Input
						type="search"
						name="search"
						placeholder={placeholder}
						aria-labelledby="search-title"
					></Input>
					<SearchButton
						type="submit"
						title="Submit your search query."
						className="sbx-custom__submit"
					></SearchButton>
				</form>
			</SearchBarContainer>
			<ResultContainer>
				<ResponsiveContainer>
					<HaEins>Movies</HaEins>
					{loading && <p>Loading...</p>}
					{error && <p>The content could not be loaded. Please try again.</p>}
					{data && <MovieListSearch data={data.results} />}
				</ResponsiveContainer>
				<ResponsiveContainer>
					<HaZwei>TV-Shows</HaZwei>
					{loadingTv && <p>Loading...</p>}
					{errorTv && <p>The content could not be loaded. Please try again.</p>}
					{dataTv && <MovieListSearch data={dataTv.results} type="tv" />}
				</ResponsiveContainer>
			</ResultContainer>
		</Layout>
	);
}
