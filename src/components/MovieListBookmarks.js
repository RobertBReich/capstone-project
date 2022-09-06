import Link from 'next/link';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

/* Used pic width's w92 w154 & w185 */
const Article = styled.article`
	position: relative;
	max-width: 156px;
	padding: 0;
	animation: fadeIn 1s ${({delay}) => delay}s forwards;
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	opacity: 0;
	background-color: #fff;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
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

const DeleteButton = styled.button`
	position: absolute;
	right: 0;
	padding: 6px 8px 4px 6px;
	border: none;
	border-radius: 0 14px 0 0;
	background-color: white;
	&:hover {
		background-color: #f30;
		color: white;
	}
`;

const Picture = styled.img`
	max-width: 154px;
	border-radius: 16px 16px 0 0;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 16px;
	gap: 24px;
`;

const MovieHeadline = styled.p`
	min-height: 56px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
`;

export default function MovieListBookmarks({type, data}) {
	const urlSource = type === 'tv' ? '/tv/' : '/movie/';
	let arrData = data;

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[1];

	const removeMovieBookmarks = useStore(state => state.removeMovieBookmarks);
	const removeTvBookmarks = useStore(state => state.removeTvBookmarks);

	function deleteCard(_id) {
		type === 'tv' ? removeTvBookmarks(_id) : removeMovieBookmarks(_id);
	}

	return (
		<Container>
			{arrData.map((item, index) => {
				return (
					<Article key={item.id} delay={0.05 * index}>
						<DeleteButton onClick={() => deleteCard(item.id)}>✖</DeleteButton>
						<Link href={urlSource + item.id}>
							<a>
								<Picture
									src={imagesBaseUrl + item.poster_path}
									alt={'image of ' + (item.title || item.name)}
								/>
							</a>
						</Link>
						<MovieHeadline>{item.title || item.name}</MovieHeadline>
					</Article>
				);
			})}
		</Container>
	);
}
