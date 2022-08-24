import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

export default function Header() {
	return (
		<Container>
			<header>
				{/* <h1>Movie Bookmark App</h1> */}
				<nav>
					<Link href="/">Home</Link> | <Link href="/movies">Movies</Link> |{' '}
					<Link href="/tvshows">TV Shows</Link>
				</nav>
			</header>
		</Container>
	);
}
