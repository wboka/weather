const baseURL =
	"https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json&address=";

export async function getLocationByLookup(lookup) {
	const locationLookup = await fetch(`${baseURL}${lookup}`);
	const data = await locationLookup.json();

	return data.result;
}

export default getLocationByLookup;
