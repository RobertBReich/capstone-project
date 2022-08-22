import styled from 'styled-components';

import useStore from './../hooks/useStore';

const Div = styled.div`
	padding: 16px;
	margin: 0 auto;
	max-width: 800px;
`;

const Article = styled.article`
	padding: 0px 0px;
	background-color: #515151;
	color: #fff;
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
	border: 1px solid rgba(#e3e3e3, 1);
	background-color: #fff;
	max-width: 154px;
`;

const Picture = styled.img`
	border-radius: 20px 20px 0 0;
`;

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

const Movieheadline = styled.p`
	padding: 8px 8px 16px 8px;
	color: black;
	overflow-wrap: break-word;
`;

export default function MovieList() {
	const arrData = useStore(state => state.arrData);
	const arrConfiguration = useStore(state => state.arrConfiguration);

	// Error prolly while Promise.all load, .poster_sizes[0] is undefined

	//console.log(arrConfiguration['backdrop_sizes'][0]);
	// (7)['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
	const imagesBaseUrl = arrConfiguration.base_url + 'w154';
	console.log('MovieList Component -> typeof: ' + typeof arrConfiguration.poster_sizes);

	return (
		<Div>
			<h1>Die Movie Liste</h1>
			<Grid>
				{arrData.map(item => {
					return (
						<Article key={item.id}>
							<Picture src={imagesBaseUrl + item.poster_path} />
							<Movieheadline>{item.title}</Movieheadline>
						</Article>
					);
				})}
			</Grid>
		</Div>
	);
}
