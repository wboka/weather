import React from "react";
import Head from "next/head";
import Link from "next/link";

import WeatherInfo from "../../../components/weatherInfo";

class Weather extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: this.props.location,
			dailyForecast: {},
			hourlyForecast: {},
			radarStation: null,
		};
	}

	async componentDidMount() {
		const locationResponse = await fetch(
			`/api/location/${encodeURI(this.state.location)}`
		);
		const locationData = await locationResponse.json();

		const weatherResponse = await fetch(
			`/api/weather/${encodeURI(
				locationData.addressMatches[0].coordinates.y.toFixed(4)
			)},${encodeURI(locationData.addressMatches[0].coordinates.x.toFixed(4))}`
		);
		const weatherData = await weatherResponse.json();

		this.setState((state, props) => ({
			dailyForecast: weatherData.dailyForecast,
			hourlyForecast: weatherData.hourlyForecast,
			radarStation: weatherData.radarStation,
		}));
	}

	render() {
		return (
			<main>
				<Head>
					<title>{this.state.location} - Just the Weather</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Link href="/">
					<a>Back to main</a>
				</Link>

				<h1>{this.state.location}</h1>

				<h2>Daily Forecast</h2>

				<div>
					{this.state.dailyForecast.periods
						? this.state.dailyForecast.periods.map((f) => {
								return <WeatherInfo key={f.name} info={f} />;
						  })
						: null}
				</div>

				<h2>Hourly Forecast</h2>

				<div>
					{this.state.hourlyForecast.periods
						? this.state.hourlyForecast.periods.map((f) => {
								return <WeatherInfo key={f.number} info={f} />;
						  })
						: null}
				</div>
			</main>
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
