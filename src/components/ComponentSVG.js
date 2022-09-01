const svgObject = {
	bookmark: 'M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z',
};

const ComponentSVG = ({variant, size = '24px', color = 'currentColor'}) => {
	return (
		<svg style={{width: size, height: size}} viewBox="0 0 24 24">
			<path fill={color} d={svgObject[variant]} />
		</svg>
	);
};

export default ComponentSVG;
