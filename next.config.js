const withPWA = require("next-pwa");
const path = require("path");

module.exports = withPWA({
	poweredByHeader: false,
	env: {
		AUTH0_BASE_URL: process.env.VERCEL_URL || process.env.AUTH0_BASE_URL,
	},
	future: {
		webpack5: true,
	},
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
});
