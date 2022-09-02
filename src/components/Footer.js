import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 180px;
	background-color: rgba(64, 64, 64, 1);
	color: white;
`;
const ImageContainer = styled.div`
	margin: 16px 0;
`;

export default function Footer() {
	return (
		<Container>
			<p>Movie Bookmark App | Robert Reich</p>
			<p>API Data provided by: </p>
			<a href="https://www.themoviedb.org" target="blank">
				<ImageContainer>
					<Image
						src="/images/themoviedb-org.svg"
						alt="themoviedb.org logo"
						width="48px"
						height="48px"
					/>
				</ImageContainer>
			</a>
		</Container>
	);
}
