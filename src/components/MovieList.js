import styled from 'styled-components';

import useStore from './../hooks/useStore';

/* Used pic width's w154 & w185 */
const Article = styled.article`
	max-width: 187px;
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
	const arrData = props.data;
	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[2];

	return (
		<Container>
			{arrData.map((item, index) => {
				return (
					<Article key={item.id} delay={0.05 * index}>
						<Picture src={imagesBaseUrl + item.poster_path} />
						<MovieHeadline>{item.title || item.name}</MovieHeadline>
					</Article>
				);
			})}
		</Container>
	);
}
