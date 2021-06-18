const baseURL =
	"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?outFields=place_Addr,address,location,type&forStorage=false&countryCode=USA&f=json&singleLine=";

export default async (req, res) => {
	const locationLookup = await fetch(`${baseURL}${req.query.lookup}`);
	const data = await locationLookup.json();

	res.status(200).json({
		addressMatches: data.candidates.map((location) => {
			return {
				...location,
				matchedAddress: location.address,
				coordinates: location.location,
			};
		}),
	});
};
