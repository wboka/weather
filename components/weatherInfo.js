function WeatherInfo(props) {
	const { info } = props;

	return (
		<div className="weather-info">
			<div className="wrapper">
				<h3>{info.name ? info.name : info.startTime}</h3>
				<div className="forecast">{info.shortForecast}</div>
				<img src={info.icon} alt={info.shortForecast} />
				<div className="temperature">
					{info.temperature} &deg;{info.temperatureUnit}
				</div>
				<div className="wind">
					{info.windSpeed} {info.windDirection}
				</div>
			</div>
		</div>
	);
}

export default WeatherInfo;
