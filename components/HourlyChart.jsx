import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	TimeScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { Config } from "./ChartConfig";

ChartJS.register(
	CategoryScale,
	LinearScale,
	TimeScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const HourlyChart = (props) => {
	const formatData = (data) => {
		return data.map((el) => {
			return {
				x: new Date(el.startTime),
				y: el.temperature,
			};
		});
	};

	const data = {
		labels: props.temperatures.map((temperature) => temperature.startTime),
		datasets: [
			{
				label: "Temperatures (F)",
				fill: true,
				data: formatData(props.temperatures),
			},
		],
	};

	return (
		<div>
			<Line data={data} options={Config} />
		</div>
	);
};

export default HourlyChart;
