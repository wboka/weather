const baseURL =
	"https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json&address=";

export default (req, res) => {
	res.status(200).send({
		result: {
			locations: [],
		},
	});
};
