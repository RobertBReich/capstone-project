import Link from 'next/link';
import styled from 'styled-components';

import useStore from './../hooks/useStore';

const Wrapper = styled.section`
	padding: 24px;
`;
const Picture = styled.img`
	max-width: calc(375px - 48px);
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

const Article = styled.article`
	display: flex;
	padding: 24px 0;
`;

export default function SingleItem(props) {
	const urlSource = props.type === 'tv' ? '/tv/' : '/movie/';
	const objData = props.data;

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[3];
	const backdropImageUrl = objConfiguration.secure_base_url + objConfiguration.backdrop_sizes[1];

	return (
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
			<Hl2>
				{objData.title || objData.name}
				<span> ({objData.release_date.split('-')[0]})</span>
			</Hl2>
			<Hl3>{objData.tagline}</Hl3>

			<Article>
				<Link key={objData.id} href={urlSource + objData.id}>
					<a>
						<Picture
							src={imagesBaseUrl + objData.poster_path}
							alt={'image of ' + (objData.title || objData.name)}
						/>
					</a>
				</Link>
			</Article>
			<div>{/* <Paragraph>{objData.overview}</Paragraph> */}</div>
		</Wrapper>
	);
}
