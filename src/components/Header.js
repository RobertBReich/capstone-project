import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
	position: fixed;
	z-index: 200;
	top: 0;
	flex-wrap: wrap;
	align-content: center;
	width: 100%;
	height: 48px;
	padding: 0 24px;
	overflow: hidden;
	background-color: rgba(64, 64, 64, 1);
	box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.5);

	& nav {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
	}

	& a {
		padding-right: 16px;
		color: white;
		font-family: 'Source Sans Pro', Arial, sans-serif;
		font-size: 17px;
		font-weight: 600;
		text-decoration: none;
	}
	& a:hover {
		color: #888;
	}
`;

export default function Header() {
	return (
		<HeaderContainer>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>{' '}
				<Link href="/movies">
					<a>Movies</a>
				</Link>{' '}
				<Link href="/tvshows">
					<a>TV</a>
				</Link>
				<Link href="/bookmarks">
					<a>Bookmarks</a>
				</Link>
				<Link href="/search">
					<a>Search</a>
				</Link>
			</nav>
		</HeaderContainer>
	);
}
