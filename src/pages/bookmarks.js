import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieListBookmarks from '../components/MovieListBookmarks';
import useStore from '../hooks/useStore';

const Ho1 = styled.h1`
	margin: 64px 16px 0 8px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;
const Ho2 = styled.h1`
	margin: 64px 16px 0 8px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;
export default function Movies() {
	const arrMovieBookmarks = useStore(state => state.arrMovieBookmarks);
	const arrTvBookmarks = useStore(state => state.arrTvBookmarks);

	const arrMovieData = arrMovieBookmarks;
	const arrTvData = arrTvBookmarks;

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

			<Ho1>Movies Bookmarks</Ho1>
			<MovieListBookmarks data={arrMovieData} type="movie" />

			<Ho2>TV Series Bookmarks</Ho2>
			<MovieListBookmarks data={arrTvData} type="tv" />
		</Layout>
	);
}
