const baseURL = "https://api.weather.gov/points/";

export default async (req, res) => {
	const locationLookup = await fetch(`${baseURL}${req.query.location}`);
	const data = await locationLookup.json();

	let dailyForecast = {};
	let hourlyForecast = {};

	const {
		forecast: daily,
		forecastHourly: hourly,
		radarStation,
	} = data.properties;

	await Promise.all([fetch(daily), fetch(hourly)])
		.then((responses) => Promise.all(responses.map((r) => r.json())))
		.then((d) => {
			dailyForecast = d[0].properties;
			hourlyForecast = d[1].properties;

			res.status(200).json({
				daily,
				dailyForecast,
				hourly,
				hourlyForecast,
				radarStation,
			});
		})
		.catch((error) =>
			res.status(500).send(`Something went wrong, please try again later.`),
		);
};
