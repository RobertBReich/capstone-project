import styled from 'styled-components';

import useStore from './../hooks/useStore';

const Picture = styled.img`
	max-width: 185px;
	border-radius: 16px 16px 16px 16px;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
`;

const MovieHeadline = styled.p`
	/* min-height: 56px; */
	padding: 12px 8px 0 16px;
	color: black;
	overflow-wrap: break-word;
	font-size: 20px;
`;

const Ho2 = styled.h2`
	margin: 32px 16px 0 8px;
	padding: 12px 8px 16px 8px;
	color: black;
	overflow-wrap: break-word;
	font-size: 24px;
`;

const Article = styled.article`
	display: flex;
	padding: 16px;

	& p {
		padding: 0 32px;
	}
`;

export default function SingleItem(data) {
	const arrData = data.data;

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[2];

	return (
		<section>
			<Ho2>Editor´s Pick</Ho2>
			<MovieHeadline>{arrData.title || arrData.name}</MovieHeadline>
			<Article>
				<div>
					<Picture src={imagesBaseUrl + arrData.poster_path} />
				</div>
				<div>
					<p>{arrData.overview}</p>
				</div>
			</Article>
		</section>
	);
}
