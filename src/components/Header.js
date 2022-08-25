import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

export default function Header() {
	return (
		<HeaderContainer>
			<nav>
				<Link href="/">Home</Link> | <Link href="/movies">Movies</Link> |{' '}
				<Link href="/tvshows">TV Shows</Link>
			</nav>
		</HeaderContainer>
	);
}
