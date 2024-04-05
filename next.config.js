const withPWA = require("next-pwa");
const path = require("path");

module.exports = withPWA({
	directoryIndex: "index.html",
	// serverRuntimeConfig: {
	// 	// Will only be available on the server side
	// 	rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN,
	// },
	// publicRuntimeConfig: {
	// 	// Will be available on both server and client
	// 	rollbarClientToken: process.env.ROLLBAR_CLIENT_TOKEN,
	// },
	dest: "public",
	disable: process.env.NODE_ENV === "development",
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
