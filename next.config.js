const withPWA = require("next-pwa");
const path = require("path");

module.exports = withPWA({
	poweredByHeader: false,
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
});
