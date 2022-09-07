import styled from 'styled-components';

import useStore from '../hooks/useStore';

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
const Picture = styled.img`
	max-width: 154px;
	border-radius: 16px 16px 0 0;
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

const InnerText = styled.div`
	min-height: 76px;
`;

export default function CrewListSmall(props) {
	const arrData = props.data;

	const objConfiguration = useStore(state => state.objConfiguration);
	const imagesBaseUrl = objConfiguration.secure_base_url + objConfiguration.profile_sizes[1];

	return (
		<ColumnScroller>
			{arrData.slice(0, 12).map((item, index) => {
				return (
					<Article key={item.id} delay={0.05 * index}>
						<InnerScroller>
							<Picture
								src={
									item.profile_path
										? imagesBaseUrl + item.profile_path
										: '../../../images/noimage185x278.jpg'
								}
								alt={'image of ' + item.name}
							/>
							<InnerText>
								<MovieHeadline>{item.name}</MovieHeadline>
								<MovieTitle>{item.job}</MovieTitle>
								<br></br>
							</InnerText>
						</InnerScroller>
					</Article>
				);
			})}
		</ColumnScroller>
	);
}
