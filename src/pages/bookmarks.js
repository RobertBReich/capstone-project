import dynamic from 'next/dynamic';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import MovieListBookmarks from '../components/MovieListBookmarks';
import useStore from '../hooks/useStore';

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

const Ho3 = styled.h3`
	margin: 0 16px 0 8px;
	padding: 80px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
	text-align: center;
`;

// Persist fix for Zustand
const DynamicWrapper = dynamic(() => import('../components/DynamicPersistWrapper'), {
	ssr: false,
});

export default function Movies() {
	const arrMovieBookmarks = useStore(state => state.arrMovieBookmarks);
	const arrTvBookmarks = useStore(state => state.arrTvBookmarks);

	const arrMovieData = arrMovieBookmarks;
	const arrTvData = arrTvBookmarks;

	return (
		<Layout>
			<DynamicWrapper>
				<Head>
					<title key="title">Movie Bookmark App</title>
					<meta
						key="description"
						name="description"
						content="Robert Reichs capstone project"
					/>
				</Head>
				{arrMovieData.length <= 0 && arrTvData.length <= 0 && (
					<Ho3>Noch keine Bookmarks vorhanden.</Ho3>
				)}
				{arrMovieData.length <= 0 || <Ho1>Movies Bookmarks</Ho1>}
				<MovieListBookmarks data={arrMovieData} type="movie" />
				{arrTvData.length <= 0 || <Ho2>TV Series Bookmarks</Ho2>}
				<MovieListBookmarks data={arrTvData} type="tv" />
			</DynamicWrapper>
		</Layout>
	);
}
