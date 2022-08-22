import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #e0e0e0;
	color: #000;
	font-size: 0.5em;

	&:hover {
		background: #d0d0d0;
	}

	&:active {
		background: #e0e0e0;
	}
`;

export default StyledButton;
