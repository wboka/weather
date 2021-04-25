const baseURL = "https://api.weather.gov/points/";

export async function getWeatherByLocation(location) {
	const locationLookup = await fetch(`${baseURL}${location}`);
	const data = await locationLookup.json();

	let dailyForecast = {};
	let hourlyForecast = {};

	const {
		forecast: daily,
		forecastHourly: hourly,
		radarStation,
	} = data.properties;

	return await Promise.all([fetch(daily), fetch(hourly)])
		.then((responses) => Promise.all(responses.map((r) => r.json())))
		.then((d) => {
			dailyForecast = d[0].properties;
			hourlyForecast = d[1].properties;

			return {
				daily,
				dailyForecast,
				hourly,
				hourlyForecast,
				radarStation,
			};
		})
		.catch((error) => {
			return `Something went wrong, please try again later.`;
		});
}

export default getWeatherByLocation;
