import Link from 'next/link';
import styled from 'styled-components';

import useStore from './../hooks/useStore';

/* Used pic width's w154 & w185 */
const Article = styled.article`
	position: relative;

	/* max-width: 156px; */
	padding: 0;
	/* animation: fadeIn 1s ${({delay}) => delay}s forwards; */

	/* border: 1px solid rgba(0, 0, 0, 0.25);

	border-radius: 16px; */

	/* opacity: 0; */

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
`;

export default function MovieList(props) {
	const urlSource = props.type === 'tv' ? '/tv/' : '/movie/';
	const arrData = props.data;
	// const objConfiguration = useStore(state => state.objConfiguration);
	// const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.poster_sizes[0];

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
								{/* <Picture
									src={imagesBaseUrl + item.poster_path}
									alt={'image of ' + (item.title || item.name)}
								/> */}
								<h2>{item.title || item.name}</h2>
							</a>
						</Link>
					</Article>
				);
			})}
		</div>
	);
}
