import styled from 'styled-components';

const DropdownButton = styled.button`
	padding: 8px 16px;
	border: none;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.2);
	color: black;
	font-size: 16px;

	&:hover {
		background-color: #888;
		color: white;
	}
`;

const DropdownItem = styled.div`
	display: none;
	position: absolute;
	z-index: 1;
	width: 300px;
	background-color: #f1f1f1;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

	& a {
		display: block;
		padding: 4px 16px;
		color: black;
		text-decoration: none;
	}
	& a:hover {
		background-color: #ccc;
	}
`;

const Dropdown = styled.div`
	display: inline-block;
	position: relative;
	&:hover * {
		display: block;
		border: 1 solid red;
	}
`;

export default function TrailerMenu(props) {
	const trailerData = props.trailerData.results.sort((a, b) =>
		a.published_at > b.published_at ? 1 : b.published_at > a.published_at ? -1 : 0
	);
	return (
		<Dropdown>
			<DropdownButton>▶ Trailers</DropdownButton>
			<DropdownItem>
				{trailerData.slice(0, 5).map(item => {
					return (
						<a
							key={item.key}
							href={'https://www.youtube.com/watch?v=' + item.key}
							target="blank"
						>
							{item.name}
						</a>
					);
				})}
			</DropdownItem>
		</Dropdown>
	);
}
