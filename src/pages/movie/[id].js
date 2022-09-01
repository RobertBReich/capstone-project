import Head from 'next/head';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import TrailerMenu from '../../components/TrailerMenu';
import useFetch from '../../hooks/useFetch';
import useStore from '../../hooks/useStore';
import toHoursAndMinutes from '../../utils/toHoursAndMinutes';

const Wrapper = styled.section`
	padding: 0 24px 24px 24px;
`;
const Picture = styled.img`
	max-width: calc(375px - 48px);
	border-radius: 16px 16px 16px 16px;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
`;

const Hl1 = styled.h1`
	padding: 68px 0 0 0;
	color: white;
	overflow-wrap: break-word;
	font-size: 36px;
	font-style: normal;
	font-weight: 600;
	& span {
		font-weight: 400;
	}
`;

const Hl3 = styled.h3`
	padding: 0 8px 8px 0;
	color: white;
	overflow-wrap: break-word;
	font-size: 20px;
	font-style: italic;
	font-weight: 400;
`;

const Hl4 = styled.h4`
	padding: 0 8px 0 0;
	color: white;
	overflow-wrap: break-word;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 1.3;
	& span {
		font-style: normal;
		font-weight: 200;
	}
`;

const Article = styled.article`
	display: flex;
	justify-content: space-between;
	padding: 24px 0;
`;

const Paragraph = styled.p`
	margin-bottom: 16px;
	color: white;
	line-height: 1.5;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const BackButton = styled.button`
	width: 34px;
	height: 34px;
	border: none;
	border-radius: 20px;
	background-color: white;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
`;
const BookmarkButton = styled.button`
	display: inline-block;
	position: relative;
	height: 34px;
	padding: 8px 16px 8px 32px;
	border: none;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
	color: black;
	font-size: 16px;

	&:hover {
		background-color: #888;
		color: white;
	}
	& img {
		position: absolute;
		top: 10px;
		left: 12px;
	}
`;

export default function Movie() {
	const router = useRouter();
	const id = router.query.id;

	const API_KEY = process.env.API_KEY;
	const SINGLE_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
	const TRAILER_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
	const {loading, error, data: objData} = useFetch(SINGLE_MOVIE);
	const {loading: trailerLoading, error: trailerError, data: trailerData} = useFetch(TRAILER_URL);

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[3];
	const backdropImageUrl = objConfiguration.secure_base_url + objConfiguration.backdrop_sizes[1];

	const setMovieBookmarks = useStore(state => state.setMovieBookmarks);

	function bookmarkHandler() {
		setMovieBookmarks(objData);
	}
	return (
		<Layout>
			<Head>
				<title>Movies</title>
			</Head>
			{loading && <p>loading...</p>}
			{error && <p>The content could not be loaded. Try again later.</p>}
			{objData && (
				<div>
					<Wrapper
						style={{
							backgroundImage:
								'linear-gradient(to right, rgba(30, 30, 30, 1) 150px, rgba(60, 60, 60, 0.9) 100%), url(' +
								backdropImageUrl +
								objData.backdrop_path +
								') ',
							backgroundSize: 'cover',
							backgroundPosition: 'right top',
							backgroundRepeat: 'no-repeat, no-repeat',
						}}
					>
						<Hl1>
							{objData.title || objData.name}
							<span> ({objData.release_date.split('-')[0]})</span>
						</Hl1>
						<Hl3>{objData.tagline}</Hl3>
						<Article>
							<div>
								<Hl4>
									{'Release Date: '}
									<span>
										{objData.release_date.split('-').reverse().join('.')}
									</span>
									<br />
									{' Genres: '}
									<span>
										{objData.genres.map((item, index) => {
											return index ? ', ' + item.name : item.name;
										})}
									</span>
									<br />
									{' Runtime: '}
									<span>{toHoursAndMinutes(objData.runtime)}</span>
								</Hl4>
							</div>
							<BookmarkButton onClick={bookmarkHandler}>
								<img src="../images/bookmark.svg" width="14px" height="14px" />
								bookmark
							</BookmarkButton>
						</Article>
						<Article>
							<div>
								<Picture
									src={imagesBaseUrl + objData.poster_path}
									alt={'image of ' + (objData.title || objData.name)}
								/>
							</div>
						</Article>
						<div>
							<Paragraph>{objData.overview}</Paragraph>
						</div>
						<ButtonContainer>
							{/* TrailerMenu */}
							{trailerLoading && <p>loading...</p>}
							{trailerError && (
								<p>The content could not be loaded. Try again later.</p>
							)}
							{trailerData && trailerData.results.length > 0 && (
								<TrailerMenu trailerData={trailerData} />
							)}

							<BackButton onClick={() => router.back()} alt="back button">
								↩
							</BackButton>
						</ButtonContainer>
					</Wrapper>
				</div>
			)}
		</Layout>
	);
}
