/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},

	env: {
		API_KEY: 'cfe8f1e1a9b233b64412ec3cd0525b67',
	},
};
module.exports = nextConfig;
