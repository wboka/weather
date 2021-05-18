import React from "react";
import Link from "next/link";
import format from "date-fns/format";

import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import WeatherInfo from "../../../components/weatherInfo";
import getWeatherByLocation from "../../../utils/weather";

class Weather extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: this.props.location,
			dailyForecast: null,
			hourlyForecast: null,
			lastUpdatedDaily: null,
			lastUpdatedHourly: null,
			radarStation: null,
		};
	}

	async componentDidMount() {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const favoriteIndex = favorites
			.map((address) => address.matchedAddress)
			.indexOf(this.state.location);

		if (favoriteIndex > -1) {
			this.setState((state, props) => ({
				lastUpdatedDaily: favorites[favoriteIndex].forecast.updated,
				dailyForecast: favorites[favoriteIndex].forecast.dailyForecast,
				lastUpdatedHourly: favorites[favoriteIndex].forecast.updated,
				hourlyForecast: favorites[favoriteIndex].forecast.hourlyForecast,
				radarStation: favorites[favoriteIndex].forecast.radarStation,
			}));
		}

		const locationResponse = await fetch(
			`/api/location/${encodeURI(this.state.location)}`
		);
		const locationData = await locationResponse.json();

		const weatherData = await getWeatherByLocation(
			`${encodeURI(
				locationData.addressMatches[0].coordinates.y.toFixed(4)
			)},${encodeURI(locationData.addressMatches[0].coordinates.x.toFixed(4))}`
		);

		this.setState((state, props) => ({
			lastUpdatedDaily: weatherData.dailyForecast.updated,
			dailyForecast: weatherData.dailyForecast,
			lastUpdatedHourly: weatherData.hourlyForecast.updated,
			hourlyForecast: weatherData.hourlyForecast,
			radarStation: weatherData.radarStation,
		}));

		this.saveForecast(weatherData);
	}

	saveForecast(weatherData) {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const favoriteIndex = favorites
			.map((address) => address.matchedAddress)
			.indexOf(this.state.location);

		if (favoriteIndex > -1) {
			favorites[favoriteIndex].forecast = weatherData;

			localStorage.setItem("favorites", JSON.stringify(favorites));
		}
	}

	render() {
		return (
			<div>
				<Header title={this.state.location} />

				<Menu />
				<main id="top">
					<Link href="/">
						<a>Back to home</a>
					</Link>

					<h1>{this.state.location}</h1>

					<h2 id="daily">Daily Forecast</h2>

					<p>
						Last Updated:{" "}
						<em>
							{this.state.lastUpdatedDaily
								? format(
										new Date(this.state.lastUpdatedDaily),
										"E yyyy-MM-dd HH:mm"
								  )
								: "Unknown"}
						</em>
					</p>

					<a href="#hourly">Go to Hourly</a>

					<div>
						{this.state.dailyForecast && this.state.dailyForecast.periods ? (
							this.state.dailyForecast.periods.map((f) => {
								return <WeatherInfo key={f.name} info={f} />;
							})
						) : (
							<p>Getting daily forecast...</p>
						)}
					</div>

					<a href="#top">Back to Top</a>

					<h2 id="hourly">Hourly Forecast</h2>

					<p>
						Last Updated:{" "}
						<em>
							{this.state.lastUpdatedHourly
								? format(
										new Date(this.state.lastUpdatedHourly),
										"E yyyy-MM-dd HH:mm"
								  )
								: "Unknown"}
						</em>
					</p>

					<a href="#daily">Go to Daily</a>

					<div>
						{this.state.hourlyForecast && this.state.hourlyForecast.periods ? (
							this.state.hourlyForecast.periods.map((f) => {
								return <WeatherInfo key={f.number} info={f} />;
							})
						) : (
							<p>Getting hourly forecast...</p>
						)}
					</div>
				</main>
			</div>
		);
	}
}

export async function getServerSideProps(context) {
	return {
		props: {
			location: context.params.location,
		},
	};
}

export default Weather;
