import React from "react";
import Link from "next/link";
import Head from "next/head";

import WeatherInfo from "../../../../components/weatherInfo";

class WeatherLatLon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: this.props.lat,
			lon: this.props.lon,
			dailyForecast: {},
			hourlyForecast: {},
			radarStation: null,
		};
	}

	componentDidMount() {
		fetch(
			`/api/weather/${encodeURI(this.state.lat)},${encodeURI(this.state.lon)}`
		)
			.then((res) => res.json())
			.then((data) => {
				this.setState((state, props) => ({
					dailyForecast: data.dailyForecast,
					hourlyForecast: data.hourlyForecast,
					radarStation: data.radarStation,
				}));
			});
	}

	render() {
		return (
			<main>
				<Head>
					<title>Just the Weather - Info</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Link href="/">
					<a>Back to main</a>
				</Link>

				<h1>
					{this.state.lat}, {this.state.lon}
				</h1>

				<h2>Daily Forecast</h2>

				<ul>
					{this.state.dailyForecast.periods
						? this.state.dailyForecast.periods.map((f) => {
								return <WeatherInfo info={f} />;
						  })
						: null}
				</ul>

				<h2>Hourly Forecast</h2>

				<ul>
					{this.state.hourlyForecast.periods
						? this.state.hourlyForecast.periods.map((f) => {
								return <WeatherInfo info={f} />;
						  })
						: null}
				</ul>

				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</main>
		);
	}
}

export async function getServerSideProps(context) {
	return {
		props: {
			lat: context.params.lat,
			lon: context.params.lon,
		},
	};
}

export default WeatherLatLon;
