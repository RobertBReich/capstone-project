import styled from 'styled-components';

import useStore from './../hooks/useStore';
import Button from './Button';

const Section = styled.section`
	padding: 16px;
`;

const ButtonContainer = styled.div`
	font-size: 1.5rem;
`;
const Article = styled.article`
	max-width: 154px;
	padding: 0;
	animation: fadeIn 1s ${({delay}) => delay}s forwards;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	opacity: 0;
	background-color: #fff;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
	color: #fff;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Picture = styled.img`
	border-radius: 20px 20px 0 0;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

const Movieheadline = styled.p`
	padding: 8px 8px 16px 8px;
	color: black;
	overflow-wrap: break-word;
`;

export default function MovieList() {
	const arrData = useStore(state => state.arrData);
	const setData = useStore(state => state.setData);
	const arrConfiguration = useStore(state => state.arrConfiguration);

	const imagesBaseUrl = arrConfiguration.base_url + arrConfiguration.poster_sizes[1];

	function fetchUrl(url) {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setData(data.results);
			});
	}

	function loadMovies() {
		fetchUrl(
			'https://api.themoviedb.org/3/discover/movie?api_key=cfe8f1e1a9b233b64412ec3cd0525b67&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
		);
	}
	function loadTVShows() {
		fetchUrl(
			'https://api.themoviedb.org/3/discover/tv?api_key=cfe8f1e1a9b233b64412ec3cd0525b67&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
		);
	}

	return (
		<Section>
			<ButtonContainer>
				<Button onClick={loadMovies}>Movies</Button>
				<Button onClick={loadTVShows}>TV-Shows</Button>
			</ButtonContainer>
			<Container>
				{arrData.map((item, index) => {
					return (
						<Article key={item.id} delay={0.05 * index}>
							<Picture src={imagesBaseUrl + item.poster_path} />
							<Movieheadline>{item.title || item.name}</Movieheadline>
						</Article>
					);
				})}
			</Container>
		</Section>
	);
}
