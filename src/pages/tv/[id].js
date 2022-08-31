import Head from 'next/head';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import TrailerMenu from '../../components/TrailerMenu';
import useFetch from '../../hooks/useFetch';
import useStore from '../../hooks/useStore';

const Wrapper = styled.section`
	padding: 24px;
`;
const Picture = styled.img`
	max-width: 185px;
	border-radius: 16px 16px 16px 16px;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
`;

const Hl2 = styled.h2`
	padding: 16px 0 0 0;
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
	padding: 24px 8px 0 0;
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
	padding: 24px 0;
`;

const Paragraph = styled.p`
	padding: 0 32px;
	color: white;
	line-height: 1.5;
`;

export default function TvShow() {
	const router = useRouter();
	const id = router.query.id;

	const API_KEY = process.env.API_KEY;
	const SINGLE_TV = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
	const TRAILER_URL = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;

	const {loading, error, data: objData} = useFetch(SINGLE_TV);
	const {loading: trailerLoading, error: trailerError, data: trailerData} = useFetch(TRAILER_URL);

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[2];
	const backdropImageUrl = objConfiguration.secure_base_url + objConfiguration.backdrop_sizes[1];

	return (
		<Layout>
			<Head>
				<title>TV Shows</title>
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
						<Hl2>{objData.title || objData.name}</Hl2>
						<Hl3>{objData.tagline}</Hl3>
						<Hl4>
							{'First air date: '}
							<span>{objData.first_air_date.split('-').reverse().join('.')}</span>
							<br />
							{' Genres: '}
							<span>
								{objData.genres.map((item, index) => {
									return index ? ', ' + item.name : item.name;
								})}
							</span>
							<br />
							{' Seasons: '}
							<span>{objData.number_of_seasons}</span>
							<br />
							{' Episodes: '}
							<span>{objData.number_of_episodes}</span>
						</Hl4>
						<Article>
							<div>
								<Picture
									src={imagesBaseUrl + objData.poster_path}
									alt={'image of ' + (objData.title || objData.name)}
								/>
							</div>
							<div>
								<Paragraph>{objData.overview}</Paragraph>
							</div>
						</Article>
						{/* TrailerMenu */}
						{trailerLoading && <p>loading...</p>}
						{trailerError && <p>The content could not be loaded. Try again later.</p>}
						{trailerData && trailerData.results.length > 0 && (
							<TrailerMenu trailerData={trailerData} />
						)}
					</Wrapper>
				</div>
			)}

			<button onClick={() => router.back()}>back</button>
		</Layout>
	);
}
