import Link from 'next/link';
import styled from 'styled-components';

import useStore from '../hooks/useStore';

import ComponentSVG from './ComponentSVG';

/* Used pic width's w92 w154 & w185 */
const Article = styled.article`
	display: flex;
	position: relative;
	flex: 0 0 auto;
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

const ColumnScroller = styled.article`
	display: flex;
	flex-wrap: nowrap;
	align-content: flex-start;
	align-items: flex-start;
	gap: 16px;
	padding: 16px 16px;
	overflow-x: scroll;
	overflow-y: hidden;
`;

const InnerScroller = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 155px;
`;

const SvgPositionDiv = styled.div`
	position: absolute;
	top: -7px;
	right: 5px;
`;
const Picture = styled.img`
	max-width: 154px;
	border-radius: 16px 16px 0 0;
`;

const MovieHeadline = styled.p`
	min-height: 76px;
	padding: 12px 8px 16px 12px;
	color: black;
	overflow-wrap: break-word;
`;

export default function MovieListSmall(props) {
	const urlSource = props.type === 'tv' ? '/tv/' : '/movie/';
	const arrData = props.data;

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[1];

	const arrMovieBookmarks = useStore(state => state.arrMovieBookmarks);
	const arrTvBookmarks = useStore(state => state.arrTvBookmarks);

	if (props.type === 'tv') {
		arrData.map(item => {
			arrTvBookmarks.map(element => {
				if (element.id === item.id) {
					item.isBookmarked = true;
				}
			});
		});
	} else {
		arrData.map(item => {
			arrMovieBookmarks.map(element => {
				if (element.id === item.id) {
					item.isBookmarked = true;
				}
			});
		});
	}

	return (
		<ColumnScroller>
			{arrData.map((item, index) => {
				return (
					<Article key={item.id} delay={0.05 * index}>
						<InnerScroller>
							{item.isBookmarked && (
								<SvgPositionDiv>
									<ComponentSVG variant="bookmark" size="32px" color="red" />
								</SvgPositionDiv>
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
						</InnerScroller>
					</Article>
				);
			})}
		</ColumnScroller>
	);
}
