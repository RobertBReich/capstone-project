import Link from 'next/link';
import styled from 'styled-components';

import useStore from './../hooks/useStore';

/* Used pic width's w154 & w185 */
const Article = styled.article`
	position: relative;
	padding: 0;
	background-color: #fff;
	color: #fff;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	& > a {
		color: black;
		text-decoration: none;
	}
`;

const Picture = styled.img`
	max-width: 92px;
	padding-right: 16px;
	border-radius: 16px 0 0 16px;
`;

const Flexbox = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 8px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	background-color: #fff;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
`;

const HaZwei = styled.h2`
	padding: 12px 0 0 0;
	color: black;
	overflow-wrap: break-word;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	& span {
		font-weight: 400;
	}
`;
const GreyText = styled.p`
	color: grey;
`;

export default function MovieList(props) {
	const urlSource = props.type === 'tv' ? '/tv/' : '/movie/';
	const arrData = props.data;
	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[0];

	const arrMovieBookmarks = useStore(state => state.arrMovieBookmarks);
	const arrTvBookmarks = useStore(state => state.arrTvBookmarks);

	if (props.type === 'tv') {
		// TV
		arrData.map(item => {
			arrTvBookmarks.map(element => {
				if (element.id === item.id) {
					item.isBookmarked = true;
				}
			});
		});
	} else {
		// Movie
		arrData.map(item => {
			arrMovieBookmarks.map(element => {
				if (element.id === item.id) {
					item.isBookmarked = true;
				}
			});
		});
	}
	return (
		<div>
			{arrData.map(item => {
				return (
					<Article key={item.id}>
						<Link href={urlSource + item.id}>
							<a>
								<Flexbox>
									<Picture
										src={imagesBaseUrl + item.poster_path}
										alt={'image of ' + (item.title || item.name)}
									/>
									<div>
										<HaZwei>{item.title || item.name}</HaZwei>
										<GreyText>
											{' '}
											{item.release_date &&
												item.release_date.split('-').reverse().join('.')}
										</GreyText>
										<span>{item.overview.substring(0, 80)}..</span>.
									</div>
								</Flexbox>
							</a>
						</Link>
					</Article>
				);
			})}
		</div>
	);
}
