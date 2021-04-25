import React from "react";
import Header from "../../../components/Header";
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
			<main id="top">
				<Header title={this.state.location} />

				<Link href="/">
					<a>Back to home</a>
				</Link>

				<h1>{this.state.location}</h1>

				<h2 id="daily">Daily Forecast</h2>

				<a href="#hourly">Go to Hourly</a>

				<div>
					{this.state.dailyForecast.periods
						? this.state.dailyForecast.periods.map((f) => {
								return <WeatherInfo key={f.name} info={f} />;
						  })
						: <p>Getting daily forecast...</p>}
				</div>

				<a href="#top">Back to Top</a>

				<h2 id="hourly">Hourly Forecast</h2>

				<a href="#daily">Go to Daily</a>

				<div>
					{this.state.hourlyForecast.periods
						? this.state.hourlyForecast.periods.map((f) => {
								return <WeatherInfo key={f.number} info={f} />;
						  })
						: <p>Getting hourly forecast...</p>}
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
