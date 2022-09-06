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
	padding: 16px 8px 0 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 13px;
	font-style: normal;
	font-weight: 600;
`;

const MovieTitle = styled.p`
	padding: 8px 8px 0 12px;
	color: black;
	overflow-wrap: break-word;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
`;

export default function CastListSmall(props) {
	// const urlSource = props.type === 'tv' ? '/tv/' : '/movie/';
	const arrData = props.data;

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.profile_sizes[1];

	// const arrMovieBookmarks = useStore(state => state.arrMovieBookmarks);
	// const arrTvBookmarks = useStore(state => state.arrTvBookmarks);

	return (
		<Container>
			{arrData.slice(0, 12).map((item, index) => {
				return (
					<Article key={item.id} delay={0.05 * index}>
						<Picture
							src={
								item.profile_path
									? imagesBaseUrl + item.profile_path
									: '../../../images/noimage185x278.jpg'
							}
							alt={'image of ' + item.name}
						/>

						<MovieHeadline>{item.name}</MovieHeadline>
						<MovieTitle>{item.job}</MovieTitle>
						<br></br>
					</Article>
				);
			})}
		</Container>
	);
}
