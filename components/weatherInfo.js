import format from "date-fns/format";

function WeatherInfo(props) {
	const { info } = props;

	return (
		<div className="weather-info container">
			<div className="row">
				<div className="col-12 col-md">
					<h3>{info.name ? info.name : format(new Date(info.startTime), 'E yyyy-MM-dd HH:mm')}</h3>
				</div>
				<div className="col-12 col-md temperature">
					{info.temperature} &deg;{info.temperatureUnit}
				</div>
				<div className="col-12 col-md forecast">{info.shortForecast}</div>
				<div className="col-12 col-md wind">
					{info.windSpeed} {info.windDirection}
				</div>
				<div className="col-12 col-md">
					<img src={info.icon} alt={info.shortForecast} />
				</div>
			</div>
		</div>
	);
}

export default WeatherInfo;
