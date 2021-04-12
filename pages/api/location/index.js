const baseURL =
	"https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json&address=";

export default (req, res) => {
	// address=4600+Silver+Hill+Rd%2C+Washington%2C+DC+20233
	res.status(200).send({
		result: {
			locations: [],
		},
	});
};
