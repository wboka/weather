const withPWA = require("next-pwa");

module.exports = withPWA({
	poweredByHeader: false,
	future: {
		webpack5: true,
	},
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
});
