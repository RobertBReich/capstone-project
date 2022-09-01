import Link from 'next/link';
import styled from 'styled-components';

import useStore from './../hooks/useStore';
import ComponentSVG from './ComponentSVG';

/* Used pic width's w154 & w185 */
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
	& div {
		position: absolute;
		top: -5px;
		right: 5px;
	}
`;

const Picture = styled.img`
	max-width: 185px;
	border-radius: 16px 16px 0 0;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	padding: 16px;
`;

const MovieHeadline = styled.p`
	min-height: 56px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
`;

export default function MovieList(props) {
	const urlSource = props.type === 'tv' ? '/tv/' : '/movie/';
	const arrData = props.data;
	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[1];

	const arrMovieBookmarks = useStore(state => state.arrMovieBookmarks);
	const arrTvBookmarks = useStore(state => state.arrTvBookmarks);

	if (props.type === 'tv') {
		// TV
		arrData.map(item => {
			arrTvBookmarks.map(ele => {
				if (ele.id === item.id) {
					item.isBookmarked = true;
				}
			});
		});
	} else {
		// Movie
		arrData.map(item => {
			arrMovieBookmarks.map(ele => {
				if (ele.id === item.id) {
					item.isBookmarked = true;
				}
			});
		});
	}
	return (
		<Container>
			{arrData.map((item, index) => {
				return (
					<Article key={item.id} delay={0.05 * index}>
						{item.isBookmarked && (
							<div>
								<ComponentSVG variant="bookmark" size="28px" color="red" />
							</div>
						)}
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
