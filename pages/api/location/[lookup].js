const baseURL =
	"https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json&address=";

export default async (req, res) => {
	const locationLookup = await fetch(`${baseURL}${req.query.lookup}`);
	const data = await locationLookup.json();

	res.status(200).json(data.result);
};
